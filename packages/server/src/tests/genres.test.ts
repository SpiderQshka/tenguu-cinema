import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearCollection("genres");
});
beforeEach(async () => {
  await clearCollection("genres");
});

describe("testing genres routes", () => {
  it("get all genres", async () => {
    const getGenresRes: Response = await request(app).get("/api/genres");
    expect(getGenresRes.status).toBe(200);
    expect(getGenresRes.body.length).toBe(0);
  });
});
