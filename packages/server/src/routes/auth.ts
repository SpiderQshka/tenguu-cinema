import { Router, Request, Response } from "express";
import models from "../models/index";
const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const user = new models.User({
    username: req.query.name,
    password: req.query.password
  });
  user.save();
});
router.post("/login", async (req: Request, res: Response) => {
  const user = new models.User({
    username: req.query.name
  });
  user.save();
});
export default router;
