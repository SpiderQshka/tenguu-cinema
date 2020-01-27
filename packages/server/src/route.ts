import { Router } from "express";
import { UserModel } from "./models/UserModel";
const router = Router();

router.get("/", async (req, res) => {
  const users = await UserModel.find({});
  res.send(users);
});

router.get("/add", async (req, res) => {
  const newUser = new UserModel({
    name: "Leo",
    age: 17
  });
  await newUser.save();
  res.redirect("/");
});

router.get("/delete", async (req, res) => {
  await UserModel.deleteOne({});
  res.redirect("/");
});

router.post("/", async (req, res) => {
  const newUser = new UserModel({
    name: req.query.name,
    age: req.query.age
  });
  await newUser.save();
});

export { router };
