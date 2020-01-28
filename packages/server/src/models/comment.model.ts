import { Schema, model, Document } from "mongoose";

export interface IComment extends Document {
  content: string;
  user: Schema.Types.ObjectId;
}

const commentScheme: Schema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default model<IComment>("Comment", commentScheme);
