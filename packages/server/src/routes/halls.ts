import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { hallValidation } from "./validation/hallsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IHall } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const halls = await models.Hall.find();

  res.json(halls);
});

router.post("/", async (req: Request, res: Response) => {
  const error = await hallValidation(req.body);
  if (error) return res.status(400).send(error);

  const hall = new models.Hall({
    ...req.body
  });
  const newHall = await hall.save();

  return res.json(newHall);
});

router.get("/:hallId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.hallId))
    return res.send("Wrong query format");

  const hall = await models.Hall.findById(req.params.hallId);

  if (!hall) return res.status(404).send("Not found");
  return res.json(hall);
});

router.put("/:hallId", async (req: Request, res: Response) => {
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
});

router.delete("/:hallId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.hallId))
    return res.send("Wrong query format");

  const deletedHall = await models.Hall.findById(req.params.hallId);
  if (!deletedHall) return res.status(404).send("Not found");

  const sessionInTheHall = await models.Session.findOne({
    hallId: req.params.hallId
  });
  if (sessionInTheHall)
    res
      .status(400)
      .send(
        "There are some sessions in this hall. If you want to delete the hall, delete sessions before"
      );

  await models.Hall.findByIdAndRemove(req.params.hallId);

  return res.json(deletedHall);
});

export default router;
