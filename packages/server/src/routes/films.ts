import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { filmValidation } from "./validation/filmsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IFilm } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteFilm } from "../db/dbServices";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const films = await models.Film.find();

  res.json(films);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error, code } = await filmValidation(req.body);
    if (error) return res.status(code).send(error);

    const film = new models.Film({
      ...req.body
    });
    const newFilm = await film.save();

    return res.json(newFilm);
  }
);

router.get("/:filmId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.filmId))
    return res.send("Wrong query format");

  const film = await models.Film.findById(req.params.filmId);

  if (!film) return res.status(404).send("Not found");

  const genres = await models.Genre.find();

  // film.genreIds.map(genreId => {
  //   genres.
  // })
  return res.json(film);
});

router.put(
  "/:filmId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const film: IFilm = req.body;

    if (!doesIdMatchesFormat(req.params.filmId))
      return res.send("Wrong query format");

    const { error, code } = await filmValidation(req.body);
    if (error) return res.status(code).send(error);

    const updatedFilm = await models.Film.findByIdAndUpdate(
      req.params.filmId,
      film
    );

    if (!updatedFilm) return res.status(404).send("Not found");
    return res.json(updatedFilm);
  }
);

router.delete(
  "/:filmId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.filmId))
      return res.send("Wrong query format");

    const deletedFilm = await deleteFilm({ _id: req.params.filmId });

    return res.json(deletedFilm);
  }
);

export default router;
