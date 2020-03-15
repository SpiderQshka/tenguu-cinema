import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { genreValidation } from "./validation/genresValidation";
import { translationValidation } from "./validation/translationValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IGenre } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteGenre } from "../db/dbServices";
import { getGenresForClient } from "../db/getDataForClient";
import { setTotalCountHeader } from "../helpers/setTotalCountHeader";

const router: Router = Router();

router.get("/", setTotalCountHeader, async (req: Request, res: Response) => {
  const genres = await models.Genre.find();

  res.json(genres);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error: e, code: c } = await translationValidation({
      ru: req.body.ru,
      en: req.body.en
    });
    if (e) return res.status(c).json(e);
    const translation = new models.Translation({
      ru: req.body.ru,
      en: req.body.en
    });
    const newTranslation = await translation.save();

    delete req.body.ru;
    delete req.body.en;

    console.log(
      newTranslation._id.toHexString(),
      typeof newTranslation._id.toHexString()
    );
    const { error, code } = await genreValidation({
      ...req.body,
      name: newTranslation._id.toHexString()
    });
    if (error) return res.status(code).json(error);

    const genre = new models.Genre({
      ...req.body,
      name: newTranslation._id.toHexString()
    });
    const newGenre = await genre.save();

    return res.json(newGenre);
  }
);

router.get("/:genreId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.genreId))
    return res.json("Wrong query format");

  const genre = await models.Genre.findById(req.params.genreId);

  if (!genre) return res.status(404).json("Not found");
  return res.json(genre);
});

router.put(
  "/:genreId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.genreId))
      return res.json("Wrong query format");

    const genre = await models.Genre.findById(req.params.genreId);
    const translation = await models.Translation.findById(genre?.name);

    await models.Translation.findByIdAndUpdate(genre?.name, {
      ru: req.body.ru ? req.body.ru : translation?.ru,
      en: req.body.en ? req.body.en : translation?.en
    });

    if (!genre) return res.status(404).json("Not found");
    return res.json(genre);
  }
);

router.delete(
  "/:genreId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.genreId))
      return res.json("Wrong query format");

    const deletedGenre = await models.Genre.findByIdAndDelete(
      req.params.genreId
    );
    if (!deletedGenre) return res.status(404).json("Not found");

    return res.json(deletedGenre);
  }
);

export default router;
