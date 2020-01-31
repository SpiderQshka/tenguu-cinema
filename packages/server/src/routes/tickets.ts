import { Router, Request, Response } from "express";
import models from "../models/index";
import { ticketValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys";
import { ITicket } from "../interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tickets = await models.Ticket.find();

  res.json(tickets);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = ticketValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const ticket = new models.Ticket({
    sessionId: req.body.sessionId,
    userId: req.body.userId,
    seatId: req.body.seatId,
    status: req.body.status
  });
  await ticket.save();

  res.send(`Ticket added successfully`);
});

router.get("/:ticketId", async (req: Request, res: Response) => {
  if (!req.params.ticketId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const ticket = await models.Ticket.findById(req.params.ticketId);

    if (!ticket) res.status(404).send("Not found");
    else res.json(ticket);
  }
});

router.put("/:ticketId", async (req: Request, res: Response) => {
  const ticket: ITicket = req.body;

  if (!req.params.ticketId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedTicket = await models.Ticket.findByIdAndUpdate(
      req.params.ticketId,
      ticket
    );
    if (!updatedTicket) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:ticketId", async (req: Request, res: Response) => {
  if (!req.params.ticketId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedTicket = await models.Ticket.findByIdAndRemove(
      req.params.ticketId
    );
    if (!deletedTicket) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
