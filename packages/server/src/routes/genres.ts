import { Router, Request, Response } from "express";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Returns all genres");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new genre`);
});

router.get("/:genreId", async (req: Request, res: Response) => {
  res.send(`Returns genre with id ${req.params.genreId}`);
});

router.patch("/:genreId", async (req: Request, res: Response) => {
  res.send(`Patches genre with id ${req.params.genreId}`);
});

router.delete("/:genreId", async (req: Request, res: Response) => {
  res.send(`Deletes genre with id ${req.params.filmId}`);
});

export default router;
