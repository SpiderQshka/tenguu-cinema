import { Router, Request, Response } from "express";
import models from "../models/index";
import { genreValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys";
// import { IGenre } from "../interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const genres = await models.Genre.find();

  res.json(genres);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = genreValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const genre = new models.Genre({
    name: req.body.name
  });
  await genre.save();

  res.send({ genre: genre._id });
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
