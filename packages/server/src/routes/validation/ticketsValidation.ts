import Joi, { ValidationResult } from "@hapi/joi";
import { ITicket } from "../../interfaces/interfaces";
import models from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";
import { Response, Request } from "express";

export const ticketSchemaValidation = (data: ITicket): ValidationResult => {
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
  return schema.validate(data);
};

export const ticketDataValidation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const takenTickets = await models.Ticket.find({
    sessionId: req.body.sessionId,
    status: "active"
  });

  const isNotSeatAvaliable = takenTickets.some(ticket => {
    return (
      ticket.seat.row === req.body.row &&
      ticket.seat.seatNumber === req.body.seat.seatNumber
    );
  });

  if (isNotSeatAvaliable) return res.status(400).send("Seat is already taken");

  const isUserExists = await models.User.findById(req.body.userId);

  if (!isUserExists) return res.status(400).send("User not found");

  const isSessionExists = await models.Session.findById(req.body.sessionId);

  if (!isSessionExists) return res.status(400).send("Session not found");

  return res.status(200).send("Validated successfully");
};
