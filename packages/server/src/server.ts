import e from "express";
import mongoose from "mongoose";

const main = async (): Promise<void> => {
  await mongoose.connect(
    "mongodb+srv://SpiderQshka:Prusov.2002@cluster0-phrn3.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

main();

const app = e();
const PORT = 4000;
app.get("/", (req: e.Request, res: e.Response) => {
  res.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
});

export default app;
