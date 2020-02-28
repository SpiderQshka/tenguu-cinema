import { Router, Request, Response } from "express";
const router: Router = Router();

router.all("/*", async (req: Request, res: Response) => {
  res.status(404).json("Page not found");
});

export default router;
