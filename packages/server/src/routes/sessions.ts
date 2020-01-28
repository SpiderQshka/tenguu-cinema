import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all sessions");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new session`);
});

router.get("/:sessionId", async (req: Request, res: Response) => {
  res.send(`Returns session with id ${req.params.sessionId}`);
});

router.patch("/:sessionId", async (req: Request, res: Response) => {
  res.send(`Patches session with id ${req.params.sessionId}`);
});

router.delete("/:sessionId", async (req: Request, res: Response) => {
  res.send(`Deletes session with id ${req.params.sessionId}`);
});

export default router;
