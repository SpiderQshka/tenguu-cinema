import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  status: string;
}

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
