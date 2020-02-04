import { Router, Request, Response } from "express";
import models from "../models/index";
import { commentValidation } from "./validation/commentsValidation";
import { _IDREGEXP } from "../keys/keys";
import { IComment } from "../interfaces/interfaces";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const comments = await models.Comment.find();

  res.json(comments);
});

router.post("/", async (req: Request, res: Response) => {
  const { error = null } = commentValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const comment = new models.Comment({
    ...req.body
  });
  await comment.save();

  res.send({ comment: comment._id });
});

router.get("/:commentId", async (req: Request, res: Response) => {
  if (!req.params.commentId.match(_IDREGEXP)) res.send("Wrong query format");
  else {
    const comment = await models.Comment.findById(req.params.commentId);

    if (!comment) res.status(404).send("Not found");
    else {
      res.json(comment);
    }
  }
});

router.put("/:commentId", async (req: Request, res: Response) => {
  const comment: IComment = req.body;

  if (!req.params.commentId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const updatedComment = await models.Comment.findByIdAndUpdate(
      req.params.commentId,
      comment
    );
    if (!updatedComment) res.status(404).send("Not found");
    else res.send("Updated successfully");
  }
});

router.delete("/:commentId", async (req: Request, res: Response) => {
  if (!req.params.commentId.match(/^[0-9a-fA-F]{24}$/))
    res.send("Wrong query format");
  else {
    const deletedComment = await models.Comment.findByIdAndRemove(
      req.params.commentId
    );
    if (!deletedComment) res.status(404).send("Not found");
    else res.send("Removed successfully");
  }
});

export default router;
