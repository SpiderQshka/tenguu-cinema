import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import { emailValidation } from "./validation/emailValidate";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { error, code } = await emailValidation({
    ...req.body
  });
  if (error) return res.status(code).json(error);

  let transporter = nodemailer.createTransport({
    secure: true,
    host: "localhost",
    // service: "gmail",
    port: 587
    // auth: {
    //   user: "prusov.200211@gmail.com",
    //   pass: "Prusov.2002"
    // },
    // tls: {
    //   rejectUnauthorized: false
    // }
  });

  let info = await transporter.sendMail({
    from: `prusov.200211@gmail.com`, // sender address
    to: "prusov.2002@mail.ru", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  return res.status(200).json(info);
});

export default router;
