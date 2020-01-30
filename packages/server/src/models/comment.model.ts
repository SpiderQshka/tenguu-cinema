import { Schema, model } from "mongoose";
import { IComment } from "../interfaces";

const commentScheme: Schema<IComment> = new Schema({
  content: {
    type: String,
    required: true
  },
  filmId: {
    type: Schema.Types.ObjectId,
    ref: "Film"
  }
});

export default model<IComment>("Comment", commentScheme);
