import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all tickets");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new ticket`);
});

router.get("/:ticketId", async (req: Request, res: Response) => {
  res.send(`Returns ticket with id ${req.params.ticketId}`);
});

router.patch("/:ticketId", async (req: Request, res: Response) => {
  res.send(`Patches ticket with id ${req.params.ticketId}`);
});

router.delete("/:ticketId", async (req: Request, res: Response) => {
  res.send(`Deletes ticket with id ${req.params.ticketId}`);
});

export default router;
