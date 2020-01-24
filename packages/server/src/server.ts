import e from "express";

const app = e();
const PORT = 3000;
app.get("/", (req: e.Request, res: e.Response) => {
  return res.send("Hello I like Typescript!!!");
});

app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
});

export default app;
