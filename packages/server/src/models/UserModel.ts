import { Schema, model } from "mongoose";

const scheme = new Schema({
  name: String,
  age: Number
});

export const UserModel = model("UserModel", scheme);
