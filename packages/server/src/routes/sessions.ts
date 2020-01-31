import { Router, Request, Response } from "express";
import models from "../models/index";
import { sessionValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys";
import { ISession } from "../interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const sessions = await models.Session.find();

  res.json(sessions);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = sessionValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const session = new models.Session({
    filmId: req.body.filmId,
    dateTime: req.body.dateTime,
    price: req.body.price,
    hallId: req.body.hallId
  });
  await session.save();

  res.send(`Session added successfully`);
});

router.get("/:sessionId", async (req: Request, res: Response) => {
  if (!req.params.sessionId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const session = await models.Session.findById(req.params.sessionId);

    if (!session) res.status(404).send("Not found");
    else res.json(session);
  }
});

router.put("/:sessionId", async (req: Request, res: Response) => {
  const session: ISession = req.body;

  if (!req.params.sessionId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedSession = await models.Session.findByIdAndUpdate(
      req.params.sessionId,
      session
    );
    if (!updatedSession) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:sessionId", async (req: Request, res: Response) => {
  if (!req.params.sessionId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedSession = await models.Session.findByIdAndRemove(
      req.params.sessionId
    );
    if (!deletedSession) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
