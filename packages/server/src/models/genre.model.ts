import { Schema, model } from "mongoose";
import { IGenre } from "../interfaces/interfaces";

const genreScheme: Schema<IGenre> = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default model<IGenre>("Genre", genreScheme);
