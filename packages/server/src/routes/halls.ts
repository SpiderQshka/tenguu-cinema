import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all halls");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new hall`);
});

router.get("/:hallId", async (req: Request, res: Response) => {
  res.send(`Returns hall with id ${req.params.hallId}`);
});

router.patch("/:hallId", async (req: Request, res: Response) => {
  res.send(`Patches hall with id ${req.params.hallId}`);
});

router.delete("/:hallId", async (req: Request, res: Response) => {
  res.send(`Deletes hall with id ${req.params.hallId}`);
});

export default router;
