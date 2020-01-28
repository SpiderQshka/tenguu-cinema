import mongoose, { Mongoose } from "mongoose";
import User from "./user.model";
import Comment from "./comment.model";

const connectDb = (url: string): Promise<Mongoose> => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

const models = { User, Comment };
export { connectDb };
export default models;
