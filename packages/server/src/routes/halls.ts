import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { hallValidation } from "./validation/hallsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IHall } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireAdmin } from "../helpers/requireAdmin";
import { deleteHall } from "../db/dbServices";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const halls = await models.Hall.find();

  res.json(halls);
});

router.post(
  "/",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    const error = await hallValidation(req.body);
    if (error) return res.status(400).send(error);

    const hall = new models.Hall({
      ...req.body
    });
    const newHall = await hall.save();

    return res.json(newHall);
  }
);

router.get("/:hallId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.hallId))
    return res.send("Wrong query format");

  const hall = await models.Hall.findById(req.params.hallId);

  if (!hall) return res.status(404).send("Not found");
  return res.json(hall);
});

router.put(
  "/:hallId",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    const hall: IHall = req.body;

    if (!doesIdMatchesFormat(req.params.hallId))
      return res.send("Wrong query format");

    const error = await hallValidation(hall);
    if (error) return res.status(400).send(error);

    const updatedHall = await models.Hall.findByIdAndUpdate(
      req.params.hallId,
      hall
    );
    if (!updatedHall) return res.status(404).send("Not found");

    return res.json(updatedHall);
  }
);

router.delete(
  "/:hallId",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.hallId))
      return res.send("Wrong query format");

    const deletedHall = await deleteHall({ _id: req.params.hallId });

    return res.json(deletedHall);
  }
);

export default router;
