import { connectDb } from "./models/index";
import { DBURL, PORT } from "./keys/keys";
import { app } from "./server";

app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
  connectDb(DBURL).then(() => console.log("DB connected"));
});
