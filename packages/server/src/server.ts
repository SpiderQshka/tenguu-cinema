import express, { Express } from "express";
import routes from "./routes/index";
import { connectDb } from "./models/index";

const app: Express = express();
const PORT: number = 4000;
const DBName: string = "Hustle";

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
app.use("/api", routes.notFound);

connectDb(
  `mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/${DBName}`
).then(async () => {
  app.listen(PORT, () => {
    console.log(`server is running and using port: ${PORT}`);
  });
});

// async function start() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/users",
// {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// }
//     );

//     app.listen(PORT, () => {
//       console.log(`server is running and using port: ${PORT}`);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

// start();
