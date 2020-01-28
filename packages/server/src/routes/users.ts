import { Router, Request, Response } from "express";
import models from "../models/index";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  models.User.find({}, (err, docs) => {
    docs.forEach(user =>
      user.checkPassword("1234", (err, result) => console.log(err, result))
    );
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
