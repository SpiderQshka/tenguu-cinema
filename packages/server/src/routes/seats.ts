import { Router, Request, Response } from "express";
import models from "../models/index";
import { seatValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys";
import { ISeat } from "../interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const seats = await models.Seat.find();

  res.json(seats);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = seatValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const seat = new models.Seat({
    row: req.body.row,
    seatNumber: req.body.seatNumber,
    hallId: req.body.hallId
  });
  await seat.save();

  res.send(`Seat added successfully`);
});

router.get("/:seatId", async (req: Request, res: Response) => {
  if (!req.params.seatId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const seat = await models.Seat.findById(req.params.seatId);

    if (!seat) res.status(404).send("Not found");
    else res.json(seat);
  }
});

router.put("/:seatId", async (req: Request, res: Response) => {
  const seat: ISeat = req.body;

  if (!req.params.seatId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedSeat = await models.Film.findByIdAndUpdate(
      req.params.seatId,
      seat
    );
    if (!updatedSeat) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:seatId", async (req: Request, res: Response) => {
  if (!req.params.seatId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedSeat = await models.Seat.findByIdAndRemove(req.params.seatId);
    if (!deletedSeat) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
