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

describe("testing tickets routes", () => {
  it("get all tickets", async () => {
    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(401);
    expect(getTicketsRes.body.length).toBe(undefined);
  });
});
