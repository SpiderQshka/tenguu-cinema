import { Router, Request, Response } from "express";
import models from "../models/index";
import { verifyToken } from "../middleware/verifyToken";
import { IUser } from "../models/user.model";

const router: Router = Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  models.User.findById(req.body.user._id, (err: Error, user: IUser) => {
    console.log(user);
  });

  res.send("Returns all users");
});

router.post("/", async (req: Request, res: Response) => {
  res.send(`Adds new user`);
});

router.get("/:userId", async (req: Request, res: Response) => {
  res.send(`Returns user with id ${req.params.userId}`);
});

router.patch("/:userId", async (req: Request, res: Response) => {
  res.send(`Patches user with id ${req.params.userId}`);
});

router.delete("/:userId", async (req: Request, res: Response) => {
  res.send(`Deletes user with id ${req.params.userId}`);
});

export default router;
