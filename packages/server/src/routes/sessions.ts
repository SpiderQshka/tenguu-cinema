import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { sessionValidation } from "./validation/sessionsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { ISession } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManagerOrAdmin } from "../helpers/requireManagerOrAdmin";
import { getSessionsForClient } from "../db/getDataForClient";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const sessions = await models.Session.find();
  res.set("X-Total-Count", `${sessions.length}`).json(sessions);
});

router.get("/parced", async (req: Request, res: Response) => {
  const sessions = await getSessionsForClient();

  return res.set("X-Total-Count", `${sessions.length}`).json(sessions);
});

router.post(
  "/",
  authenticate,
  requireManagerOrAdmin,
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

  const session = await models.Session.findById(req.params.sessionId);

  if (!session) return res.status(404).json("Not found");
  return res.json(session);
});

router.put(
  "/:sessionId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const session: ISession = req.body;

    if (!doesIdMatchesFormat(req.params.sessionId))
      return res.json("Wrong query format");

    const { error, code } = await sessionValidation(req.body, false);
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
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.sessionId))
      return res.json("Wrong query format");

    const deletedSession = await models.Session.findByIdAndDelete(
      req.params.sessionId
    );

    return res.json(deletedSession);
  }
);

export default router;
