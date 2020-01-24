import e from "express";
import cors from "cors";
// import mongoose from "mongoose";

// const start = async (): Promise<void> => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://SpiderQshka:Prusov.2002@cluster0-phrn3.mongodb.net/test",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();

const app = e();
const PORT = 4000;

app.use(cors());

app.use("/", (req, res) => {
  res.json({ greeting: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
});
