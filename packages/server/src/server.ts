import express, { Express } from "express";
import path from "path";
import routes from "./routes/index";
import passport from "passport";
import "./config/passport";
import bodyParser from "body-parser";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  "favicon.ico",
  express.static(path.resolve(__dirname, "../../client/build/favicon.ico"))
);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.static(path.resolve(__dirname, "../../client/build")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", routes.auth);
app.use("/api/films", routes.films);
app.use("/api/genres", routes.genres);
app.use("/api/users", routes.users);
app.use("/api/tickets", routes.tickets);
app.use("/api/halls", routes.halls);
app.use("/api/sessions", routes.sessions);
app.use("/api/translations", routes.translations);
app.use("/api/*", routes.notFound);

export { app };
