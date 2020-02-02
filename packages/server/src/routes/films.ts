import { Router, Request, Response } from "express";
import models from "../models/index";
import { filmValidation } from "./validation/validation";
import { _IDREGEXP } from "../keys/keys";
import { IFilm } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const films = await models.Film.find();

  res.json(films);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = filmValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const nameExists = await models.Film.findOne({ name: req.body.name });
  if (nameExists) res.status(400).send("Film name already exists");

  const film = new models.Film({
    name: req.body.name,
    genreId: req.body.genreId,
    duration: req.body.duration,
    trailerLink: req.body.trailerLink,
    rating: req.body.rating
  });
  await film.save();

  res.send(`Film "${req.body.name}" added successfully`);
});

router.get("/:filmId", async (req: Request, res: Response) => {
  if (!req.params.filmId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const film = await models.Film.findById(req.params.filmId);

    if (!film) res.status(404).send("Not found");
    else res.json(film);
  }
});

router.put("/:filmId", async (req: Request, res: Response) => {
  const film: IFilm = req.body;

  if (!req.params.filmId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedFilm = await models.Film.findByIdAndUpdate(
      req.params.filmId,
      film
    );
    if (!updatedFilm) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:filmId", async (req: Request, res: Response) => {
  if (!req.params.filmId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedFilm = await models.Film.findByIdAndRemove(req.params.filmId);
    if (!deletedFilm) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
