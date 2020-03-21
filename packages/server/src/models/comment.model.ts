import { Schema, model } from "mongoose";
import { IComment } from "../interfaces/interfaces";

const commentScheme: Schema<IComment> = new Schema({
  content: {
    type: String,
    required: true
  },
  film: {
    type: Schema.Types.ObjectId,
    ref: "Film"
  }
});

export default model<IComment>("Comment", commentScheme);
