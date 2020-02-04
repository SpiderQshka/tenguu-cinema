import { Schema, model } from "mongoose";
import { IHall } from "../interfaces/interfaces";

const hallScheme: Schema<IHall> = new Schema({
  numberOfRows: {
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
