import { Schema, model } from "mongoose";
import { ISession } from "../interfaces";

const sessionScheme: Schema<ISession> = new Schema({
  filmId: {
    type: Schema.Types.ObjectId,
    ref: "Film",
    required: true
  },
  dateTime: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hallId: {
    type: Schema.Types.ObjectId,
    ref: "Hall",
    required: true
  }
});

export default model<ISession>("Session", sessionScheme);
