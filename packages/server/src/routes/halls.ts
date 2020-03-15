import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { hallValidation } from "./validation/hallsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IHall } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteHall } from "../db/dbServices";
import { getHallsForClient } from "../db/getDataForClient";
import { setTotalCountHeader } from "../helpers/setTotalCountHeader";
import { translationValidation } from "./validation/translationValidation";

const router: Router = Router();

router.get("/", setTotalCountHeader, async (req: Request, res: Response) => {
  const halls = await models.Hall.find();

  res.json(halls);
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

    const { error, code } = await hallValidation({
      ...req.body,
      name: newTranslation._id.toHexString()
    });
    if (error) return res.status(code).json(error);

    const hall = new models.Hall({
      ...req.body,
      name: newTranslation._id.toHexString()
    });
    const newHall = await hall.save();

    return res.json(newHall);
  }
);

router.get("/:hallId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.hallId))
    return res.json("Wrong query format");

  const hall = await models.Hall.findById(req.params.hallId);

  if (!hall) return res.status(404).json("Not found");
  return res.json(hall);
});

router.put(
  "/:hallId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.hallId))
      return res.json("Wrong query format");

    const hall = await models.Hall.findById(req.params.hallId);
    const translation = await models.Translation.findById(hall?.name);
    await models.Translation.findByIdAndUpdate(hall?.name, {
      ru: req.body.ru ? req.body.ru : translation?.ru,
      en: req.body.en ? req.body.en : translation?.en
    });

    delete req.body.ru;
    delete req.body.en;

    const { error, code } = await hallValidation({
      ...req.body
    });
    if (error) return res.status(code).json(error);

    const updatedHall = await models.Hall.findByIdAndUpdate(req.params.hallId, {
      ...req.body
    });
    if (!updatedHall) return res.status(404).json("Not found");

    return res.json(updatedHall);
  }
);

router.delete(
  "/:hallId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.hallId))
      return res.json("Wrong query format");

    const deletedHall = await models.Hall.findByIdAndDelete(req.params.hallId);

    return res.json(deletedHall);
  }
);

export default router;
