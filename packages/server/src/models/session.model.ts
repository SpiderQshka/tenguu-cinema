import { Schema, model } from "mongoose";
import { ISession } from "../interfaces/interfaces";

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

sessionScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<ISession>("Session", sessionScheme);
