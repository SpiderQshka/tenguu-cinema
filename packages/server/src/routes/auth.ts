import { Router, Request, Response } from "express";
import models from "../models/index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../keys/keys";
import {
  registerValidation,
  loginValidation
} from "./validation/authValidation";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const error = await registerValidation(req.body);
  if (error) return res.status(400).send(error);

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new models.User({
    username: req.body.name,
    password: hashPassword,
    email: req.body.email
  });
  const newUser = await user.save();

  return res.json(newUser);
});

router.post("/login", async (req: Request, res: Response) => {
  const error = await loginValidation(req.body);
  if (error) return res.status(400).send(error);

  const user: any = await models.User.findOne({ email: req.body.email });

  const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);

  return res.header("auth-token", token).json(user);
});

export default router;
