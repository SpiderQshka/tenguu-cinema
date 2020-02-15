import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { userValidation } from "./validation/usersValidation";
import { IUser } from "../interfaces/interfaces";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { requireAdmin } from "../helpers/requireAdmin";
import { deleteUser } from "../db/dbServices";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const users = await models.User.find();

    return res.json(users);
  }
);

router.get(
  "/manager/:userId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.userId))
      return res.send("Wrong query format");

    const user = await models.User.findById(req.params.userId);

    if (!user) return res.status(404).send("Not found");
    return res.json(user);
  }
);

router.get("/:userId", authenticate, async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.userId))
    return res.send("Wrong query format");

  const currentUserId = req.user ? req.user["_id"].toString() : null;

  if (currentUserId !== req.params.userId)
    return res.status(403).send("Access denied");

  const user = await models.User.findById(req.params.userId);

  if (!user) return res.status(404).send("Not found");
  return res.json(user);
});

router.post(
  "/",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    const { error, code } = await userValidation(req.body);
    if (error) return res.status(code).send(error);

    const user = new models.User({
      username: req.body.username,
      password: await models.User.hashPassword(req.body.password),
      email: req.body.email,
      status: req.body.status
    });
    const newUser = await user.save();

    return res.json(newUser);
  }
);

router.put(
  "/:userId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const user: IUser = req.body;

    if (!doesIdMatchesFormat(req.params.userId))
      return res.send("Wrong query format");

    const { error, code } = await userValidation(req.body);
    if (error) return res.status(code).send(error);

    const updatedUser = await models.User.findByIdAndUpdate(
      req.params.userId,
      user
    );

    if (!updatedUser) return res.status(404).send("Not found");
    return res.json(updatedUser);
  }
);

router.delete(
  "/:userId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.userId))
      return res.send("Wrong query format");

    const deletedUser = await deleteUser({ _id: req.params.userId });

    return res.json(deletedUser);
  }
);

export default router;
