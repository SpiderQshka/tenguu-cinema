import { Router, Request, Response } from "express";
import { models } from "../models/index";
import { userValidation } from "./validation/usersValidation";
import { IUser } from "../interfaces/interfaces";
import { doesIdMatchesFormat } from "../helpers/doesIdMatchesFormat";
import { authenticate } from "../helpers/authenticate";
import { requireManagerOrAdmin } from "../helpers/requireManagerOrAdmin";
import { getUsersForClient } from "../db/getDataForClient";
import { deleteUser } from "../db/dbServices";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const users = await getUsersForClient();
    return res
      .set("X-Total-Count", `${users.length}`)
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", "origin, content-type, accept")
      .json(users);
  }
);

router.get(
  "/parced/:userId",
  authenticate,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.userId))
      return res.json("Wrong query format");

    const currentUserId = req.user ? req.user["id"].toString() : null;
    if (currentUserId !== req.params.userId)
      return res.status(403).json("Access denied");

    const user = (await getUsersForClient({ _id: currentUserId }))[0];

    if (!user) return res.status(404).json("Not found");
    return res.json(user);
  }
);

router.get(
  "/:userId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    if (!doesIdMatchesFormat(req.params.userId))
      return res.json("Wrong query format");

    const user = await models.User.findById(req.params.userId);

    if (!user) return res.status(404).json("Not found");
    return res.json(user);
  }
);

router.post(
  "/",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const author = req.user as any;

    const { error, code } = await userValidation(req.body);
    if (error) return res.status(code).json(error);

    if (
      author.status !== "admin" &&
      (req.body.status === "manager" || req.body.status === "admin")
    )
      return res
        .status(403)
        .json("Access denied. You can't create managers or admin");

    const user = new models.User({
      username: req.body.username,
      password: await models.User.hashPassword(req.body.password),
      email: req.body.email,
      status: req.body.status,
    });
    const newUser = await user.save();

    return res.json(newUser);
  }
);

router.put(
  "/:userId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const user: IUser = req.body;
    const author = req.user as any;

    if (!doesIdMatchesFormat(req.params.userId))
      return res.json("Wrong query format");

    if (
      (author.status === "manager" &&
        author._id.toString() === req.params.userId &&
        user.status === "admin") ||
      (author._id.toString() !== req.params.userId &&
        (user.status === "admin" || user.status === "manager"))
    )
      return res
        .status(403)
        .json(
          "Access denied. You can't change managers or admin or change default users on managers "
        );

    const { error, code } = await userValidation(user, author._id.toString());
    if (error) return res.status(code).json(error);

    const updatedUser = await models.User.findByIdAndUpdate(
      req.params.userId,
      user
    );

    if (!updatedUser) return res.status(404).json("Not found");
    return res.json(updatedUser);
  }
);

router.delete(
  "/:userId",
  authenticate,
  requireManagerOrAdmin,
  async (req: Request, res: Response) => {
    const author = req.user as any;
    if (!doesIdMatchesFormat(req.params.userId))
      return res.json("Wrong query format");

    if (author._id.toString() === req.params.userId)
      return res.status(403).json("You can't delete yourself");

    const userForDelete = await models.User.findById(req.params.userId);

    if (
      author.status !== "admin" &&
      (userForDelete?.status === "manager" || userForDelete?.status === "admin")
    )
      return res
        .status(403)
        .json("Access denied. You can't delete admin or managers");

    const deletedUser = await deleteUser({ _id: req.params.userId });

    return res.json(deletedUser);
  }
);

export default router;
