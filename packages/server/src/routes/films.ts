import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { filmValidation } from "./validation/filmsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IFilm } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteFilm } from "../db/dbServices";
import { getFilmsForClient } from "../db/getDataForClient";
import { setTotalCountHeader } from "../helpers/setTotalCountHeader";
import { translationValidation } from "./validation/translationValidation";

const router: Router = Router();

router.get("/", setTotalCountHeader, async (req: Request, res: Response) => {
  const films = await getFilmsForClient();

  return res.json(films);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error: e, code: c } = await translationValidation({
      ru: req.body.descRu,
      en: req.body.descEn
    });
    const { error: er, code: co } = await translationValidation({
      ru: req.body.nameRu,
      en: req.body.nameEn
    });
    if (e || er) return res.status(c || co).json(e || er);
    const nameTranslation = new models.Translation({
      ru: req.body.nameRu,
      en: req.body.nameEn
    });
    const descTranslation = new models.Translation({
      ru: req.body.descRu,
      en: req.body.descEn
    });
    const newDescTranslation = await descTranslation.save();
    const newNameTranslation = await nameTranslation.save();

    delete req.body.nameRu;
    delete req.body.nameEn;
    delete req.body.descRu;
    delete req.body.descEn;

    const { error, code } = await filmValidation({
      ...req.body,
      name: newNameTranslation._id.toHexString(),
      description: newDescTranslation._id.toHexString()
    });
    if (error) return res.status(code).json(error);

    const film = new models.Film({
      ...req.body,
      name: newNameTranslation._id.toHexString(),
      description: newDescTranslation._id.toHexString()
    });
    const newFilm = await film.save();

    return res.json(newFilm);
  }
);

router.get("/:filmId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.filmId))
    return res.json("Wrong query format");

  const film = await getFilmsForClient({ _id: req.params.filmId });

  if (!film[0]) return res.status(404).json("Not found");

  return res.json(film[0]);
});

router.put(
  "/:filmId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.filmId))
      return res.json("Wrong query format");

    const { error: e, code: c } = await translationValidation({
      ru: req.body.descRu,
      en: req.body.descEn
    });
    const { error: er, code: co } = await translationValidation({
      ru: req.body.nameRu,
      en: req.body.nameEn
    });

    if (e || er) return res.status(c || co).json(e || er);

    const nameTranslation = new models.Translation({
      ru: req.body.nameRu,
      en: req.body.nameEn
    });
    const descTranslation = new models.Translation({
      ru: req.body.descRu,
      en: req.body.descEn
    });

    const newDescTranslation = await descTranslation.save();
    const newNameTranslation = await nameTranslation.save();

    delete req.body.nameRu;
    delete req.body.nameEn;
    delete req.body.descRu;
    delete req.body.descEn;

    const { error, code } = await filmValidation({
      ...req.body,
      name: newNameTranslation._id.toHexString(),
      description: newDescTranslation._id.toHexString()
    });
    if (error) return res.status(code).json(error);

    const updatedFilm = await models.Film.findByIdAndUpdate(req.params.filmId, {
      ...req.body,
      name: newNameTranslation._id.toHexString(),
      description: newDescTranslation._id.toHexString()
    });

    if (!updatedFilm) return res.status(404).json("Film not found");
    return res.json(updatedFilm);
  }
);

router.delete(
  "/:filmId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.filmId))
      return res.json("Wrong query format");

    const deletedFilm = await models.Film.findByIdAndDelete(req.params.filmId);

    return res.json(deletedFilm);
  }
);

export default router;
