import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { authenticate } from "../helpers/authenticate";
import { requireManagerOrAdmin } from "../helpers/requireManagerOrAdmin";
import { deleteTranslation } from "../db/dbServices";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const translations = await models.Translation.find();

  res.set("X-Total-Count", `${translations.length}`).json(translations);
});

router.get("/:translationId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.translationId))
    return res.json("Wrong query format");

  const translation = await models.Translation.findById(
    req.params.translationId
  );

  if (!translation) return res.status(404).json("Not found");
  return res.json(translation);
});

router.delete(
  "/:translationId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.translationId))
      return res.json("Wrong query format");

    const deletedTranslation = await deleteTranslation({
      _id: req.params.translationId,
    });
    if (!deletedTranslation) return res.status(404).json("Not found");

    return res.json(deletedTranslation);
  }
);

export default router;
