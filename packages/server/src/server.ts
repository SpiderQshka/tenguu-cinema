import express from "express";
import mongoose from "mongoose";
import { router } from "./route";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/users",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );

    app.listen(PORT, () => {
      console.log(`server is running and using port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
