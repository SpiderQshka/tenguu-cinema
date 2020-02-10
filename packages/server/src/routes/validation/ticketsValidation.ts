import Joi from "@hapi/joi";
import { ITicket } from "../../interfaces/interfaces";
import { models } from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";

export const ticketValidation = async (
  data: ITicket
): Promise<{ error: string | null; code: number }> => {
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
  if (error) return { error: error.details[0].message, code: 400 };

  // __________data validation___________

  const currentSession = await models.Session.findById(data.sessionId);

  if (!currentSession) return { error: "Session not found", code: 404 };

  const currentHall = await models.Hall.findById(currentSession.hallId);

  if (!currentHall) return { error: "Hall not found", code: 404 };

  const doesHallHasSeatNumber =
    currentHall.seatsOnRow >= data.seat.seatNumber &&
    currentHall.numberOfRows >= data.seat.row;

  if (!doesHallHasSeatNumber)
    return {
      error: `Seat or row number is incorrect, max row: ${currentHall.numberOfRows}, max seat number: ${currentHall.seatsOnRow}`,
      code: 400
    };

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

  if (isNotSeatAvailable) return { error: "Seat is already taken", code: 400 };

  const isUserExists = await models.User.findById(data.userId);

  if (!isUserExists) return { error: "User not found", code: 404 };

  return { error: null, code: 200 };
};
