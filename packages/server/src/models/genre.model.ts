import { Schema, model } from "mongoose";
import { IGenre } from "../interfaces/interfaces";

const genreScheme: Schema<IGenre> = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "translation",
    required: true
  }
});

genreScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<IGenre>("Genre", genreScheme);
