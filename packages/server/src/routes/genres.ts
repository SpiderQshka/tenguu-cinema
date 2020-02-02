import { Router, Request, Response } from "express";
import models from "../models/index";
import { genreValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys/keys";
import { IGenre } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const genres = await models.Genre.find();

  res.json(genres);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = genreValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const nameExists = await models.Genre.findOne({ name: req.body.name });
  if (nameExists) res.status(400).send("Genre already exists");
  const genre = new models.Genre({
    name: req.body.name
  });
  await genre.save();

  res.send(`Genre "${req.body.name}" added successfully`);
});

router.get("/:genreId", async (req: Request, res: Response) => {
  if (!req.params.genreId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const genre = await models.Genre.findById(req.params.genreId);

    if (!genre) res.status(404).send("Not found");
    else res.json(genre);
  }
});

router.put("/:genreId", async (req: Request, res: Response) => {
  const genre: IGenre = req.body;

  if (!req.params.genreId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedGenre = await models.Genre.findByIdAndUpdate(
      req.params.genreId,
      genre
    );
    if (!updatedGenre) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:genreId", async (req: Request, res: Response) => {
  if (!req.params.genreId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedGenre = await models.Genre.findByIdAndRemove(
      req.params.genreId
    );
    if (!deletedGenre) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
