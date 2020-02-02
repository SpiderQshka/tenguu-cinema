import { Router, Request, Response } from "express";
import models from "../models/index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../keys/keys";
import { registerValidation, loginValidation } from "./validation/validation";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
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

router.post("/login", async (req: Request, res: Response) => {
  const { error = null } = loginValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const user = await models.User.findOne({ email: req.body.email });
  if (!user) res.status(400).send("Email doesn't exist");
  else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) res.status(400).send("Invalid password");

    const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);

    res.header("auth-token", token).send(token);
  }
});

export default router;
