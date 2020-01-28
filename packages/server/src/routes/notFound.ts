import { Router, Request, Response } from "express";
const router: Router = Router();

router.all("/*", async (req: Request, res: Response) => {
  res.send("Page not found");
});

export default router;
