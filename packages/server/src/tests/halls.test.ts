import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import faker from "faker";
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
    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.random.word() + faker.random.word()
      });

    expect(setHallRes.error.text).toBe(undefined);
    expect(setHallRes.status).toBe(200);

    const getHallsRes: Response = await request(app).get("/api/halls");
    expect(getHallsRes.status).toBe(200);
    expect(getHallsRes.body.length).toBe(1);
  });
  it("get hall by id", async () => {
    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.random.word() + faker.random.word()
      });

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
it("change hall", async () => {
  const setHallRes: Response = await request(app)
    .post("/api/halls")
    .send({
      numberOfRows: faker.random.number(),
      seatsOnRow: faker.random.number(),
      name: faker.random.word() + faker.random.word()
    });

  expect(setHallRes.error.text).toBe(undefined);
  expect(setHallRes.status).toBe(200);

  const changeHallRes: Response = await request(app)
    .put(`/api/halls/${setHallRes.body._id}`)
    .send({
      numberOfRows: faker.random.number(),
      seatsOnRow: faker.random.number(),
      name: faker.random.word() + faker.random.word()
    });

  expect(changeHallRes.error.text).toBe(undefined);
  expect(changeHallRes.status).toBe(200);
});
it("delete hall", async () => {
  const setHallRes: Response = await request(app)
    .post("/api/halls")
    .send({
      numberOfRows: faker.random.number(),
      seatsOnRow: faker.random.number(),
      name: faker.random.word() + faker.random.word()
    });

  expect(setHallRes.error.text).toBe(undefined);
  expect(setHallRes.status).toBe(200);

  const deleteHallRes: Response = await request(app).delete(
    `/api/halls/${setHallRes.body._id}`
  );

  expect(deleteHallRes.error.text).toBe(undefined);
  expect(deleteHallRes.status).toBe(200);

  const getHallsResAfterDelete: Response = await request(app).get("/api/halls");
  expect(getHallsResAfterDelete.status).toBe(200);
  expect(getHallsResAfterDelete.body.length).toBe(0);
});
