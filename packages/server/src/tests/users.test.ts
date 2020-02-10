import request, { Response } from "supertest";
import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection, deleteUser } from "../db/dbServices";
import { setNewUser } from "../db/setRandomTestTables";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearCollection("users");
});
beforeEach(async () => {
  await clearCollection("users");
});

describe("testing user routes", () => {
  it("get all users", async () => {
    const getUsersRes: Response = await request(app).get("/api/users");
    expect(getUsersRes.status).toBe(401);
  });
  it("create new user", async () => {
    const setUserRes = await setNewUser(app);
    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    const getUsersRes: Response = await request(app).get("/api/users");
    expect(getUsersRes.status).toBe(401);
  });
  it("delete user", async () => {
    const setUserRes = await setNewUser(app);

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    await deleteUser({ _id: setUserRes.body._id });

    const getUsersResAfterDelete: Response = await request(app).get(
      "/api/users"
    );
    expect(getUsersResAfterDelete.status).toBe(401);
  });
});
