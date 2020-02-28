import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { sessionValidation } from "./validation/sessionsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { ISession } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteSession } from "../db/dbServices";
import { getSessionsForClient } from "../db/getDataForClient";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const sessions = await getSessionsForClient();

  res.json(sessions);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error, code } = await sessionValidation(req.body);
    if (error) return res.status(code).json(error);

    const session = new models.Session({
      ...req.body
    });

    const addedSession = await session.save();
    return res.json(addedSession);
  }
);

router.get("/:sessionId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.sessionId))
    return res.json("Wrong query format");

  const session = await getSessionsForClient();

  if (!session[0]) return res.status(404).json("Not found");
  else return res.json(session[0]);
});

router.put(
  "/:sessionId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const session: ISession = req.body;

    if (!doesIdMatchesFormat(req.params.sessionId))
      return res.json("Wrong query format");

    const { error, code } = await sessionValidation(req.body);
    if (error) return res.status(code).json(error);

    const updatedSession = await models.Session.findByIdAndUpdate(
      req.params.sessionId,
      session
    );

    if (!updatedSession) return res.status(404).json("Not found");
    return res.json(updatedSession);
  }
);

router.delete(
  "/:sessionId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.sessionId))
      return res.json("Wrong query format");

    const deletedSession = await deleteSession({ _id: req.params.sessionId });

    return res.json(deletedSession);
  }
);

export default router;
