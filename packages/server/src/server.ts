import express, { Express } from "express";
import routes from "./routes/index";
import { connectDb } from "./models/index";
import { DBURL, PORT } from "./keys/keys";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/test", (req, res) => res.status(200).send("2222"));
app.use("/api/auth", routes.auth);
app.use("/api/films", routes.films);
app.use("/api/genres", routes.genres);
app.use("/api/comments", routes.comments);
app.use("/api/users", routes.users);
app.use("/api/tickets", routes.tickets);
app.use("/api/halls", routes.halls);
app.use("/api/sessions", routes.sessions);
app.use("/api", routes.notFound);

app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
  connectDb(DBURL).then(() => console.log("DB connected"));
});

export { app };
