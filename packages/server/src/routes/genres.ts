import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { genreValidation } from "./validation/genresValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IGenre } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireAdmin } from "../helpers/requireAdmin";
import { deleteGenre } from "../db/dbServices";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const genres = await models.Genre.find();

  res.json(genres);
});

router.post(
  "/",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    const error = await genreValidation(req.body);
    if (error) return res.status(400).send(error);

    const genre = new models.Genre({
      ...req.body
    });
    const newGenre = await genre.save();

    return res.json(newGenre);
  }
);

router.get("/:genreId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.genreId))
    return res.send("Wrong query format");

  const genre = await models.Genre.findById(req.params.genreId);

  if (!genre) return res.status(404).send("Not found");
  return res.json(genre);
});

router.put(
  "/:genreId",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    const genre: IGenre = req.body;

    if (!doesIdMatchesFormat(req.params.genreId))
      return res.send("Wrong query format");

    const error = await genreValidation(req.body);
    if (error) return res.status(400).send(error);

    const updatedGenre = await models.Genre.findByIdAndUpdate(
      req.params.genreId,
      genre
    );

    if (!updatedGenre) return res.status(404).send("Not found");
    return res.json(updatedGenre);
  }
);

router.delete(
  "/:genreId",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.genreId))
      return res.send("Wrong query format");

    const deletedGenre = await deleteGenre({ _id: req.params.genreId });
    if (!deletedGenre) return res.status(404).send("Not found");

    return res.json(deletedGenre);
  }
);

export default router;
