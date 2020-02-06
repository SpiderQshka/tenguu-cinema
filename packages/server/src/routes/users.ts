import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { userValidation } from "./validation/usersValidation";
import { IUser } from "../interfaces/interfaces";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await models.User.find();

  return res.json(users);
});

router.get("/:userId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.userId))
    return res.send("Wrong query format");

  const user = await models.User.findById(req.params.userId);

  if (!user) return res.status(404).send("Not found");
  return res.json(user);
});

router.put("/:userId", async (req: Request, res: Response) => {
  const user: IUser = req.body;

  if (!doesIdMatchesFormat(req.params.userId))
    return res.send("Wrong query format");

  const error = await userValidation(user);
  if (error) return res.status(400).send(error);

  const updatedUser = await models.User.findByIdAndUpdate(
    req.params.userId,
    user
  );

  if (!updatedUser) return res.status(404).send("Not found");
  return res.json(updatedUser);
});

router.delete("/:userId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.userId))
    return res.send("Wrong query format");

  const deletedUser = await models.User.findById(req.params.userId);
  if (!deletedUser) return res.status(404).send("Not found");

  await models.Ticket.deleteMany({
    userId: req.params.userId
  });

  await models.User.findByIdAndRemove(req.params.userId);

  return res.json(deletedUser);
});

export default router;
