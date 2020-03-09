import express, { Express } from "express";
import path from "path";
import routes from "./routes/index";
import passport from "passport";
import "./config/passport";
import multer from "multer";
import bodyParser from "body-parser";

const app: Express = express();

export const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage });

app.use(upload.single("photo"), upload.single("pictures"));
app.use(function(err: any, req: any, res: any, next: any) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static(path.resolve(__dirname, "../uploads")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", routes.auth);
app.use("/api/films", routes.films);
app.use("/api/genres", routes.genres);
app.use("/api/comments", routes.comments);
app.use("/api/users", routes.users);
app.use("/api/tickets", routes.tickets);
app.use("/api/halls", routes.halls);
app.use("/api/sessions", routes.sessions);
app.use("/api", routes.notFound);

export { app };
