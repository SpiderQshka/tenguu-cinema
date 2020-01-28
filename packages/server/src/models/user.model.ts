import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  checkPassword: (
    password: string,
    cb: (err: string | null, result: boolean) => void
  ) => void;
}

const userScheme: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userScheme.methods.checkPassword = function(
  password: string,
  cb: (err: string | null, result: boolean) => void
) {
  if (this.password !== password) {
    return cb("Wrong password", false);
  } else {
    return cb(null, true);
  }
};

export default model<IUser>("User", userScheme);
