import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { hallValidation } from "./validation/hallsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IHall } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteHall } from "../db/dbServices";
import { getHallsForClient } from "../db/getDataForClient";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const halls = await getHallsForClient();

  res.json(halls);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error, code } = await hallValidation(req.body);
    if (error) return res.status(code).json(error);

    const hall = new models.Hall({
      ...req.body
    });
    const newHall = await hall.save();

    return res.json(newHall);
  }
);

router.get("/:hallId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.hallId))
    return res.json("Wrong query format");

  const hall = await getHallsForClient({ _id: req.params.hallId });

  if (!hall) return res.status(404).json("Not found");
  return res.json(hall);
});

router.put(
  "/:hallId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const hall: IHall = req.body;

    if (!doesIdMatchesFormat(req.params.hallId))
      return res.json("Wrong query format");

    const { error, code } = await hallValidation(req.body);
    if (error) return res.status(code).json(error);

    const updatedHall = await models.Hall.findByIdAndUpdate(
      req.params.hallId,
      hall
    );
    if (!updatedHall) return res.status(404).json("Not found");

    return res.json(updatedHall);
  }
);

router.delete(
  "/:hallId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.hallId))
      return res.json("Wrong query format");

    const deletedHall = await deleteHall({ _id: req.params.hallId });

    return res.json(deletedHall);
  }
);

export default router;
