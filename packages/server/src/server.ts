import express, { Express } from "express";
import routes from "./routes/index";
import { connectDb } from "./models/index";
import { DBURL } from "./keys/keys";

const app: Express = express();
const PORT: number = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", routes.auth);
app.use("/api/films", routes.films);
app.use("/api/genres", routes.genres);
app.use("/api/comments", routes.comments);
app.use("/api/users", routes.users);
app.use("/api/tickets", routes.tickets);
app.use("/api/halls", routes.halls);
app.use("/api/sessions", routes.sessions);
app.use("/api/seats", routes.seats);
app.use("/api", routes.notFound);

connectDb(DBURL).then(async () => {
  app.listen(PORT, () => {
    console.log(`server is running and using port: ${PORT}`);
  });
});
