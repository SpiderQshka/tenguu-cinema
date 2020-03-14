import { Schema, model } from "mongoose";
import { IFilm } from "../interfaces/interfaces";

const filmScheme: Schema<IFilm> = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "translation",
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
    type: String
  },
  releaseDate: {
    type: String,
    required: true
  },
  description: {
    type: Schema.Types.ObjectId,
    ref: "translation",
    required: true
  }
});

filmScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<IFilm>("Film", filmScheme);
