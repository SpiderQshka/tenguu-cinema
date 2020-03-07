import { Request, Response } from "express";

export const setTotalCountHeader = async (
  req: Request,
  res: Response,
  next: Function
): Promise<Response | void> => {
  res.set("X-Total-Count", `10`);
  next();
};
