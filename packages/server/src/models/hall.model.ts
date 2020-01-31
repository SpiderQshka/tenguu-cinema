import { Schema, model } from "mongoose";
import { IHall } from "../interfaces";

const hallScheme: Schema<IHall> = new Schema({
  numberOfSeats: {
    type: Number,
    required: true
  },
  seatsOnRow: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default model<IHall>("Hall", hallScheme);
