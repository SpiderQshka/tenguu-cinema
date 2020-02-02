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
  seatId: {
    type: Schema.Types.ObjectId,
    ref: "Seat",
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  }
});

export default model<ITicket>("Ticket", ticketScheme);
