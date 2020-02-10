import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { commentValidation } from "./validation/commentsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IComment } from "../interfaces/interfaces";
import { authenticate } from "../helpers/authenticate";
import { requireManager } from "../helpers/requireManager";
import { deleteComment } from "../db/dbServices";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const comments = await models.Comment.find();

  res.json(comments);
});

router.post(
  "/",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const { error, code } = await commentValidation(req.body);
    if (error) return res.status(code).send(error);

    const comment = new models.Comment({
      ...req.body
    });
    await comment.save();

    return res.json(comment);
  }
);

router.get("/:commentId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.commentId))
    return res.send("Wrong query format");

  const comment = await models.Comment.findById(req.params.commentId);
  if (!comment) return res.status(404).send("Not found");

  return res.json(comment);
});

router.put(
  "/:commentId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    const comment: IComment = req.body;

    if (!doesIdMatchesFormat(req.params.commentId))
      return res.send("Wrong query format");

    const { error, code } = await commentValidation(req.body);
    if (error) return res.status(code).send(error);

    const updatedComment = await models.Comment.findByIdAndUpdate(
      req.params.commentId,
      comment
    );
    if (!updatedComment) return res.status(404).send("Not found");

    return res.json(updatedComment);
  }
);

router.delete(
  "/:commentId",
  authenticate,
  requireManager,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.commentId))
      return res.send("Wrong query format");

    const deletedComment = await deleteComment({ _id: req.params.commentId });

    return res.json(deletedComment);
  }
);

export default router;
