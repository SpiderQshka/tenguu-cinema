import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { commentValidation } from "./validation/commentsValidation";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { IComment } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const comments = await models.Comment.find();

  res.json(comments);
});

router.post("/", async (req: Request, res: Response) => {
  const error = await commentValidation(req.body);
  if (error) return res.status(400).send(error);

  const comment = new models.Comment({
    ...req.body
  });
  await comment.save();

  return res.json(comment);
});

router.get("/:commentId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.commentId))
    return res.send("Wrong query format");

  const comment = await models.Comment.findById(req.params.commentId);
  if (!comment) return res.status(404).send("Not found");

  return res.json(comment);
});

router.put("/:commentId", async (req: Request, res: Response) => {
  const comment: IComment = req.body;

  if (!doesIdMatchesFormat(req.params.commentId))
    return res.send("Wrong query format");

  const error = await commentValidation(req.body);
  if (error) return res.status(400).send(error);

  const updatedComment = await models.Comment.findByIdAndUpdate(
    req.params.commentId,
    comment
  );
  if (!updatedComment) return res.status(404).send("Not found");

  return res.json(updatedComment);
});

router.delete("/:commentId", async (req: Request, res: Response) => {
  if (!doesIdMatchesFormat(req.params.commentId))
    return res.send("Wrong query format");

  const deletedComment = await models.Comment.findByIdAndRemove(
    req.params.commentId
  );
  if (!deletedComment) return res.status(404).send("Not found");

  return res.json(deletedComment);
});

export default router;
