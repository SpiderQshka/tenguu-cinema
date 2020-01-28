import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all users");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new user`);
});

router.get("/:userId", async (req: Request, res: Response) => {
  res.send(`Returns user with id ${req.params.userId}`);
});

router.patch("/:userId", async (req: Request, res: Response) => {
  res.send(`Patches user with id ${req.params.userId}`);
});

router.delete("/:userId", async (req: Request, res: Response) => {
  res.send(`Deletes user with id ${req.params.userId}`);
});

export default router;
