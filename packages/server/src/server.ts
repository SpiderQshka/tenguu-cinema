import express, { Express } from "express";
import routes from "./routes/index";
import passport from "passport";
import "./config/passport";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
