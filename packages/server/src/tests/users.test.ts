import request, { Response } from "supertest";
import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";

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
});
