import { Request, Response } from "express";

export const requireManager = async (
  req: Request,
  res: Response,
  next: Function
): Promise<Response | void> => {
  if (!req.user) throw Error("Something went wrong..");
  const user: any = req.user;
  if (user.status !== "manager" && user.status !== "admin")
    return res.status(403).send("Access denied");
  next();
};
