import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { ticketValidation } from "./validation/ticketsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { ITicket } from "../interfaces/interfaces";
import { TicketStatuses } from "../types/types";
import { authenticate } from "../helpers/authenticate";
import { deleteTicket } from "../db/dbServices";
import { requireManager } from "../helpers/requireManager";
import { getTicketsForClient } from "../db/getDataForClient";
import { setTotalCountHeader } from "../helpers/setTotalCountHeader";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  setTotalCountHeader,
  async (req: Request, res: Response) => {
    const tickets = await getTicketsForClient();

    res.json(tickets);
  }
);

router.post("/", authenticate, async (req: Request, res: Response) => {
  const { error, code } = await ticketValidation(req.body);
  if (error) return res.status(code).json(error);

  const ticket = new models.Ticket({
    sessionId: req.body.sessionId,
    userId: req.body.userId,
    seat: req.body.seat,
    status: req.body.status as TicketStatuses
  });

  const addedTicket = await ticket.save();
  return res.json(addedTicket);
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
  requireManager,
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

    // const currentUserId = req.user ? req.user["_id"].toString() : null;
    // const ticketOwner = await models.User.findById(ticketForDelete?.userId);

    // const ticketOwnerId = ticketOwner ? ticketOwner["_id"].toString() : null;

    // if (currentUserId !== ticketOwnerId)
    //   return res
    //     .status(400)
    //     .json(
    //       "User id in ticket data doesn't match with id of currently logged user"
    //     );

    const deletedTicket = await models.Ticket.findByIdAndDelete(
      req.params.ticketId
    );

    return res.json(deletedTicket);
  }
);

export default router;
