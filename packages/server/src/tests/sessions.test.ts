import request, { Response } from "supertest";
import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearDb } from "../db/dbServices";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearDb();
});
beforeEach(async () => {
  await clearDb();
});

describe("testing sessions routes", () => {
  it("get all sessions", async () => {
    const getSessionsRes: Response = await request(app).get("/api/sessions");
    expect(getSessionsRes.status).toBe(200);
    expect(getSessionsRes.body.length).toBe(0);
  });
});
