import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const userScheme: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "default"
  }
});

export default model<IUser>("User", userScheme);
