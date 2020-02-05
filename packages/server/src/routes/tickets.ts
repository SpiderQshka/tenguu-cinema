import { Router, Request, Response } from "express";
import models from "../models/index";
import { ticketValidation } from "./validation/ticketsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { ITicket } from "../interfaces/interfaces";
import { TicketStatuses } from "../types/types";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tickets = await models.Ticket.find();

  res.json(tickets);
});

router.post("/", async (req: Request, res: Response) => {
  const error = await ticketValidation(req.body);
  if (error) return res.status(400).send(error);

  const ticket = new models.Ticket({
    sessionId: req.body.sessionId,
    userId: req.body.userId,
    seat: req.body.seat,
    status: req.body.status as TicketStatuses
  });

  const addedTicket = await ticket.save();
  return res.json(addedTicket);
});

router.get("/:ticketId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.ticketId))
    return res.send("Wrong query format");

  const ticket = await models.Ticket.findById(req.params.ticketId);

  if (!ticket) return res.status(404).send("Not found");
  return res.json(ticket);
});

router.put("/:ticketId", async (req: Request, res: Response) => {
  const ticket: ITicket = req.body;

  if (!doesIdMatchesFormat(req.params.ticketId))
    return res.send("Wrong query format");

  const error = await ticketValidation(ticket);
  if (error) return res.status(400).send(error);

  const updatedTicket = await models.Ticket.findByIdAndUpdate(
    req.params.ticketId,
    ticket
  );

  if (!updatedTicket) return res.status(404).send("Not found");
  return res.json(updatedTicket);
});

router.delete("/:ticketId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.ticketId))
    return res.send("Wrong query format");

  const deletedTicket = await models.Ticket.findByIdAndRemove(
    req.params.ticketId
  );
  if (!deletedTicket) return res.status(404).send("Not found");

  return res.json(deletedTicket);
});

export default router;
