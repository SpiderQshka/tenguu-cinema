import { Router, Request, Response } from "express";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all films");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new film`);
});

router.get("/:filmId", async (req: Request, res: Response) => {
  res.send(`Returns film with id ${req.params.filmId}`);
});

router.patch("/:filmId", async (req: Request, res: Response) => {
  res.send(`Patches film with id ${req.params.filmId}`);
});

router.delete("/:filmId", async (req: Request, res: Response) => {
  res.send(`Deletes film with id ${req.params.filmId}`);
});

export default router;
