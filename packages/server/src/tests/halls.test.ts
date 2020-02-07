import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection, deleteHall } from "../db/dbServices";
import { setNewHall } from "../helpers/setRandomTestTables";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
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
  it("create new hall", async () => {
    const setHallRes = await setNewHall(app);

    expect(setHallRes.error.text).toBe(undefined);
    expect(setHallRes.status).toBe(200);

    const getHallsRes: Response = await request(app).get("/api/halls");
    expect(getHallsRes.status).toBe(200);
    expect(getHallsRes.body.length).toBe(1);
  });
  it("get hall by id", async () => {
    const setHallRes = await setNewHall(app);

    expect(setHallRes.error.text).toBe(undefined);
    expect(setHallRes.status).toBe(200);

    const getHallRes: Response = await request(app).get(
      `/api/halls/${setHallRes.body._id}`
    );

    expect(getHallRes.error.text).toBe(undefined);
    expect(getHallRes.status).toBe(200);

    const getHallsRes: Response = await request(app).get("/api/halls");
    expect(getHallsRes.status).toBe(200);
    expect(getHallsRes.body.length).toBe(1);
  });
});
it("delete hall", async () => {
  const setHallRes = await setNewHall(app);

  expect(setHallRes.error.text).toBe(undefined);
  expect(setHallRes.status).toBe(200);

  await deleteHall({ _id: setHallRes.body._id });

  const getHallsResAfterDelete: Response = await request(app).get("/api/halls");
  expect(getHallsResAfterDelete.status).toBe(200);
  expect(getHallsResAfterDelete.body.length).toBe(0);
});
