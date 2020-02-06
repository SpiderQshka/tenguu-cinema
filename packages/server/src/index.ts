import { connectDb } from "./db/dbServices";
import { DBURL, PORT } from "./keys/keys";
import { app } from "./server";

app.listen(PORT, async () => {
  console.log(`server is running and using port: ${PORT}`);
  await connectDb(DBURL).then(() => console.log("DB connected"));
});
