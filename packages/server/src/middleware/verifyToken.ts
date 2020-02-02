import { Request, RequestHandler, Response } from "express";
import { TOKEN_SECRET } from "../keys/keys";
import jwt from "jsonwebtoken";

const verifyToken: RequestHandler = (req: Request, res: Response, next) => {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("Access denied");
  else {
    try {
      const verify = jwt.verify(token, TOKEN_SECRET);
      req.body.user = verify;
    } catch (e) {
      res.status(400).send("Invalid token");
    }

    next();
  }
};

export { verifyToken };
