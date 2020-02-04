import { Router, Request, Response } from "express";
import models from "../models/index";
import { hallValidation } from "./validation/hallsValidation";
import { _IDREGEXP } from "../keys/keys";
import { IHall } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const halls = await models.Hall.find();

  res.json(halls);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = hallValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const nameExists = await models.Hall.findOne({ name: req.body.name });
  if (nameExists) return res.status(400).send("Hall name already exists");

  const hall = new models.Hall({
    ...req.body
  });
  await hall.save();

  return res.send(`Hall "${req.body.name}" added successfully`);
});

router.get("/:hallId", async (req: Request, res: Response) => {
  if (!req.params.hallId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const hall = await models.Hall.findById(req.params.hallId);

    if (!hall) res.status(404).send("Not found");
    else res.json(hall);
  }
});

router.put("/:hallId", async (req: Request, res: Response) => {
  const hall: IHall = req.body;

  if (!req.params.hallId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedHall = await models.Hall.findByIdAndUpdate(
      req.params.hallId,
      hall
    );
    if (!updatedHall) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:hallId", async (req: Request, res: Response) => {
  if (!req.params.hallId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedHall = await models.Hall.findByIdAndRemove(req.params.hallId);
    if (!deletedHall) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
