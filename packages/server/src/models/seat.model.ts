import { Schema, model } from "mongoose";
import { ISeat } from "../interfaces/interfaces";

const seatScheme: Schema<ISeat> = new Schema({
  row: {
    type: Number,
    required: true
  },
  seatNumber: {
    type: Number,
    required: true
  },
  hallId: {
    type: Schema.Types.ObjectId,
    ref: "Hall",
    required: true
  }
});

export default model<ISeat>("Seat", seatScheme);
