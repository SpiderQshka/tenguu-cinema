import { Router, Request, Response } from "express";
import { models } from "../models/index";
import {
  registerValidation,
  loginValidation
} from "./validation/authValidation";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const { error, code } = await registerValidation(req.body);

  if (error) return res.status(code).json(error);

  const user = new models.User({
    username: req.body.username,
    password: await models.User.hashPassword(req.body.password),
    email: req.body.email
  });
  const newUser = await user.save();

  const token = await models.User.generateJWT(newUser);

  return res.header("auth-token", token).json(newUser);
});

router.post("/login", async (req: Request, res: Response) => {
  const { error, code } = await loginValidation(req.body);
  if (error) return res.status(code).json(error);

  const user = await models.User.findOne({ email: req.body.email });

  const token = await models.User.generateJWT(user);

  return res.header("auth-token", token).json(user);
});

export default router;
