import { Schema, model } from "mongoose";
import { ITicket } from "../interfaces/interfaces";

const ticketScheme: Schema<ITicket> = new Schema({
  sessionId: {
    type: Schema.Types.ObjectId,
    ref: "Session",
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  seat: {
    row: {
      type: Number,
      required: true
    },
    seatNumber: {
      type: Number,
      required: true
    }
  },
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

ticketScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<ITicket>("Ticket", ticketScheme);
