import { Schema, model } from "mongoose";
import { IFilm } from "../interfaces/interfaces";

const filmScheme: Schema<IFilm> = new Schema({
  name: {
    type: String,
    required: true
  },
  genreId: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  trailerLink: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  }
});

export default model<IFilm>("Film", filmScheme);
