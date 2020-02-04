import { Router, Request, Response } from "express";
import models from "../models/index";
import {
  sessionSchemaValidation,
  sessionDataValidation
} from "./validation/sessionsValidation";
import { _IDREGEXP } from "../keys/keys";
import { ISession } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const sessions = await models.Session.find();

  res.json(sessions);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = sessionSchemaValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const response = await sessionDataValidation(req, res);
  console.log(response.statusCode !== 200);

  if (response.statusCode !== 200) return response;

  const session = new models.Session({
    ...req.body
  });
  await session.save();

  return res.send(`Session added successfully`);
});

router.get("/:sessionId", async (req: Request, res: Response) => {
  if (!req.params.sessionId.match(_IDREGEXP))
    return res.send("Wrong query format");
  else {
    const session = await models.Session.findById(req.params.sessionId);

    if (!session) return res.status(404).send("Not found");
    else return res.json(session);
  }
});

router.put("/:sessionId", async (req: Request, res: Response) => {
  const session: ISession = req.body;

  if (!req.params.sessionId.match(/^[0-9a-fA-F]{24}$/))
    return res.send("Wrong query format");
  else {
    const updatedSession = await models.Session.findByIdAndUpdate(
      req.params.sessionId,
      session
    );
    if (!updatedSession) return res.status(404).send("Not found");
    else return res.send("Updated successfully");
  }
});

router.delete("/:sessionId", async (req: Request, res: Response) => {
  if (!req.params.sessionId.match(/^[0-9a-fA-F]{24}$/))
    return res.send("Wrong query format");
  else {
    const deletedSession = await models.Session.findByIdAndRemove(
      req.params.sessionId
    );
    if (!deletedSession) return res.status(404).send("Not found");
    else return res.send("Removed successfully");
  }
});

export default router;
