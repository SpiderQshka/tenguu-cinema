import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearCollection("halls");
});
beforeEach(async () => {
  await clearCollection("halls");
});

describe("testing halls routes", () => {
  it("get all halls", async () => {
    const getHallsRes: Response = await request(app).get("/api/halls");
    expect(getHallsRes.status).toBe(200);
    expect(getHallsRes.body.length).toBe(0);
  });
});
