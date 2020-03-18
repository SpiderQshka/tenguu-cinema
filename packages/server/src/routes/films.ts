import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { filmValidation } from "./validation/filmsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { authenticate } from "../helpers/authenticate";
import { requireManagerOrAdmin } from "../helpers/requireManagerOrAdmin";
import { getFilmsForClient } from "../db/getDataForClient";
import { translationValidation } from "./validation/translationValidation";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const films = await getFilmsForClient();

  return res.set("X-Total-Count", `${films.length}`).json(films);
});

router.post(
  "/",
  authenticate,
  requireManagerOrAdmin,
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
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.filmId))
      return res.json("Wrong query format");

    const film = await models.Film.findById(req.params.filmId);
    const nameTranslation = await models.Translation.findById(film?.name);
    const descTranslation = await models.Translation.findById(
      film?.description
    );

    await models.Translation.findByIdAndUpdate(film?.name, {
      ru: req.body.nameRu ? req.body.nameRu : nameTranslation?.ru,
      en: req.body.nameEn ? req.body.nameEn : nameTranslation?.en
    });

    await models.Translation.findByIdAndUpdate(film?.description, {
      ru: req.body.descRu ? req.body.descRu : descTranslation?.ru,
      en: req.body.descEn ? req.body.descEn : descTranslation?.en
    });

    delete req.body.nameRu;
    delete req.body.nameEn;
    delete req.body.descRu;
    delete req.body.descEn;

    const { error, code } = await filmValidation({
      ...req.body
    });
    if (error) return res.status(code).json(error);

    const updatedFilm = await models.Film.findByIdAndUpdate(req.params.filmId, {
      ...req.body
    });

    if (!updatedFilm) return res.status(404).json("Film not found");
    return res.json(updatedFilm);
  }
);

router.delete(
  "/:filmId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.filmId))
      return res.json("Wrong query format");

    const deletedFilm = await models.Film.findByIdAndDelete(req.params.filmId);

    return res.json(deletedFilm);
  }
);

export default router;
