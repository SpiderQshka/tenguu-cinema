import { Router, Request, Response } from "express";
import models from "../models/index";
import {
  ticketSchemaValidation,
  ticketDataValidation
} from "./validation/ticketsValidation";
import { _IDREGEXP } from "../keys/keys";
import { ITicket } from "../interfaces/interfaces";
import { TicketStatuses } from "../types/types";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tickets = await models.Ticket.find();

  res.json(tickets);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = ticketSchemaValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const response = await ticketDataValidation(req, res);
  if (response.statusCode !== 200) return response;

  const ticket = new models.Ticket({
    sessionId: req.body.sessionId,
    userId: req.body.userId,
    seat: req.body.seat,
    status: req.body.status as TicketStatuses
  });
  await ticket.save();

  return res.send(`Ticket added successfully`);
});

router.get("/:ticketId", async (req: Request, res: Response) => {
  if (!req.params.ticketId.match(_IDREGEXP))
    return res.send("Wrong query format");
  else {
    const ticket = await models.Ticket.findById(req.params.ticketId);

    if (!ticket) return res.status(404).send("Not found");
    else return res.json(ticket);
  }
});

router.put("/:ticketId", async (req: Request, res: Response) => {
  const ticket: ITicket = req.body;

  if (!req.params.ticketId.match(_IDREGEXP))
    return res.send("Wrong query format");

  const response = await ticketDataValidation(req, res);
  if (response.statusCode !== 200) return response;

  const updatedTicket = await models.Ticket.findByIdAndUpdate(
    req.params.ticketId,
    ticket
  );

  if (!updatedTicket) return res.status(404).send("Not found");
  else return res.send("Updated successfully");
});

router.delete("/:ticketId", async (req: Request, res: Response) => {
  if (!req.params.ticketId.match(_IDREGEXP))
    return res.send("Wrong query format");

  const deletedTicket = await models.Ticket.findByIdAndRemove(
    req.params.ticketId
  );

  if (!deletedTicket) return res.status(404).send("Not found");
  else return res.send("Removed successfully");
});

export default router;
