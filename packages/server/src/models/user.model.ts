import { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces/interfaces";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../keys/keys";
import jwt from "jsonwebtoken";

export interface IUserEntity extends IUser {
  comparePasswords(password: string, hash: string): boolean;
}

export interface IUserModel extends Model<IUserEntity> {
  hashPassword(password: string): Promise<string>;
  generateJWT(user: IUserEntity | null): Promise<string>;
}

export const userSchema: Schema<IUserEntity> = new Schema({
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
  },
  photo: {
    type: String
  }
});

userSchema.static(
  "hashPassword",
  async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
);

userSchema.method(
  "comparePasswords",
  (password: string, hash: string): boolean => {
    if (bcrypt.compareSync(password, hash)) return true;
    return false;
  }
);

userSchema.static(
  "generateJWT",
  async (user: IUserEntity | null): Promise<string> => {
    if (!user) throw Error("Cannot find user");
    return jwt.sign({ _id: user._id }, TOKEN_SECRET);
  }
);

userSchema.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<IUserEntity, IUserModel>("User", userSchema);
