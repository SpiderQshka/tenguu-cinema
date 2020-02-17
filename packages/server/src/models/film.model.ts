import { Schema, model } from "mongoose";
import { IFilm } from "../interfaces/interfaces";

const filmScheme: Schema<IFilm> = new Schema({
  name: {
    type: String,
    required: true
  },
  genreIds: [
    {
      type: String,
      required: true
    }
  ],
  duration: {
    type: Number,
    required: true
  },
  trailerLink: {
    type: String,
    required: true
  },
  ratings: [
    {
      ratingValue: {
        type: Number,
        required: true
      },
      raterName: {
        type: String,
        required: true
      }
    }
  ],
  filmImage: {
    type: String,
    required: true
  }
});

export default model<IFilm>("Film", filmScheme);
