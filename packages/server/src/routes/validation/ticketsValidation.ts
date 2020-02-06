import Joi from "@hapi/joi";
import { ITicket } from "../../interfaces/interfaces";
import { models } from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";

export const ticketValidation = async (
  data: ITicket
): Promise<string | null> => {
  const schema = Joi.object({
    sessionId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    userId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    seat: Joi.object({
      row: Joi.number()
        .min(1)
        .required(),
      seatNumber: Joi.number()
        .min(1)
        .required()
    }).required(),
    status: Joi.string().default("active")
  });

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  // __________data validation___________

  const takenTickets = await models.Ticket.find({
    sessionId: data.sessionId,
    status: "active"
  });

  const isNotSeatAvailable = takenTickets.some(ticket => {
    return (
      ticket.seat.row === data.seat.row &&
      ticket.seat.seatNumber === data.seat.seatNumber
    );
  });

  if (isNotSeatAvailable) return "Seat is already taken";

  const isUserExists = await models.User.findById(data.userId);

  if (!isUserExists) return "User not found";

  const isSessionExists = await models.Session.findById(data.sessionId);

  if (!isSessionExists) return "Session not found";

  return null;
};
