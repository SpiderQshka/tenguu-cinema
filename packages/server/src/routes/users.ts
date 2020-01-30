import { Router, Request, Response } from "express";
import models from "../models/index";
import bcrypt from "bcryptjs";
import { registerValidation } from "./validation/validation";
import { IUser } from "../interfaces";
import { _IDREGEXP } from "../keys";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await models.User.find();

  res.json(users);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const emailExists = await models.User.findOne({ email: req.body.email });
  if (emailExists) res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new models.User({
    username: req.body.name,
    password: hashPassword,
    email: req.body.email
  });
  user.save();

  res.send({ user: user._id });
});

router.get("/:userId", async (req: Request, res: Response) => {
  if (!req.params.userId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const user = await models.User.findById(req.params.userId);

    if (!user) res.status(404).send("Not found");

    res.json(user);
  }
});

router.put("/:userId", async (req: Request, res: Response) => {
  const user: IUser = req.body;

  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedUser = await models.User.findByIdAndUpdate(
      req.params.userId,
      user
    );
    if (!updatedUser) res.status(404).send("Not found");

    res.send("Updated successfully");
  }
});

router.delete("/:userId", async (req: Request, res: Response) => {
  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedUser = await models.User.findByIdAndRemove(req.params.userId);
    if (!deletedUser) res.status(404).send("Not found");
    else {
      res.send("Removed successfully");
    }
  }
});

export default router;
