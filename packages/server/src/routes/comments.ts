import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all comments");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new comment`);
});

router.get("/:commentId", async (req: Request, res: Response) => {
  res.send(`Returns comment with id ${req.params.commentId}`);
});

router.patch("/:commentId", async (req: Request, res: Response) => {
  res.send(`Patches comment with id ${req.params.commentId}`);
});

router.delete("/:commentId", async (req: Request, res: Response) => {
  res.send(`Deletes comment with id ${req.params.commentId}`);
});

export default router;
