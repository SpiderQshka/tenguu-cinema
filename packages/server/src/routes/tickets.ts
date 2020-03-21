import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { ticketValidation } from "./validation/ticketsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { ITicket } from "../interfaces/interfaces";
import { TicketStatuses } from "../types/types";
import { authenticate } from "../helpers/authenticate";
import { requireManagerOrAdmin } from "../helpers/requireManagerOrAdmin";
import { getTicketsForClient } from "../db/getDataForClient";

const router: Router = Router();

router.get("/", authenticate, async (req: Request, res: Response) => {
  const tickets = await models.Ticket.find();

  res.set("X-Total-Count", `${tickets.length}`).json(tickets);
});

router.get("/parced", async (req: Request, res: Response) => {
  const tickets = await getTicketsForClient();

  return res.set("X-Total-Count", `${tickets.length}`).json(tickets);
});

router.post("/", authenticate, async (req: Request, res: Response) => {
  if (Array.isArray(req.body)) {
    const promises = req.body.map(async (ticketData: any) => {
      const { error, code } = await ticketValidation(ticketData);
      if (error) return res.status(code).json(error);

      const ticket = new models.Ticket({
        session: ticketData.session,
        user: ticketData.user,
        seat: ticketData.seat,
        status: ticketData.status as TicketStatuses
      });
      return await ticket.save();
    });
    const result = await Promise.all(promises);

    return res.json(result);
  } else {
    const { error, code } = await ticketValidation(req.body);
    if (error) return res.status(code).json(error);

    const ticket = new models.Ticket({
      session: req.body.session,
      user: req.body.user,
      seat: req.body.seat,
      status: req.body.status as TicketStatuses
    });
    const addedTicket = await ticket.save();
    return [addedTicket];
  }
});

router.get("/:ticketId", authenticate, async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.ticketId))
    return res.json("Wrong query format");

  const ticket = await models.Ticket.findById(req.params.ticketId);

  if (!ticket) return res.status(404).json("Not found");
  return res.json(ticket);
});

router.put(
  "/:ticketId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const ticket: ITicket = req.body;

    if (!doesIdMatchesFormat(req.params.ticketId))
      return res.json("Wrong query format");

    const { error, code } = await ticketValidation(req.body);
    if (error) return res.status(code).json(error);

    const updatedTicket = await models.Ticket.findByIdAndUpdate(
      req.params.ticketId,
      ticket
    );

    if (!updatedTicket) return res.status(404).json("Not found");
    return res.json(updatedTicket);
  }
);

router.delete(
  "/:ticketId",
  authenticate,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.ticketId))
      return res.json("Wrong query format");

    const ticketForDelete = await models.Ticket.findById(req.params.ticketId);
    if (!ticketForDelete) return res.status(404).json("Not found");

    const deletedTicket = await models.Ticket.findByIdAndDelete(
      req.params.ticketId
    );

    return res.json(deletedTicket);
  }
);

export default router;
