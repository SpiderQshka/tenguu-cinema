import request, { Response } from "supertest";
import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearCollection("films");
});
beforeEach(async () => {
  await clearCollection("films");
});

describe("testing films routes", () => {
  it("get all films", async () => {
    const getFilmsRes: Response = await request(app).get("/api/films");
    expect(getFilmsRes.status).toBe(200);
    expect(getFilmsRes.body.length).toBe(0);
  });
});
