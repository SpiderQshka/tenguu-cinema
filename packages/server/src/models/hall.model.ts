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
    type: Schema.Types.ObjectId,
    ref: "Translation",
    required: true
  }
});

hallScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<IHall>("Hall", hallScheme);
