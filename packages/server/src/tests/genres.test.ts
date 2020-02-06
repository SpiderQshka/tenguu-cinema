import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import faker from "faker";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
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
  it("create new genre", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    const getGenresRes: Response = await request(app).get("/api/genres");
    expect(getGenresRes.status).toBe(200);
    expect(getGenresRes.body.length).toBe(1);
  });
  it("get genre by id", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    const getGenreRes: Response = await request(app).get(
      `/api/genres/${setGenreRes.body._id}`
    );

    expect(getGenreRes.error.text).toBe(undefined);
    expect(getGenreRes.status).toBe(200);

    const getGenresRes: Response = await request(app).get("/api/genres");
    expect(getGenresRes.status).toBe(200);
    expect(getGenresRes.body.length).toBe(1);
  });
  it("change genre", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    const changeGenreRes: Response = await request(app)
      .put(`/api/genres/${setGenreRes.body._id}`)
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    expect(changeGenreRes.error.text).toBe(undefined);
    expect(changeGenreRes.status).toBe(200);
  });
  it("delete genre", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    const deleteGenreRes: Response = await request(app).delete(
      `/api/genres/${setGenreRes.body._id}`
    );

    expect(deleteGenreRes.error.text).toBe(undefined);
    expect(deleteGenreRes.status).toBe(200);

    const getGenresResAfterDelete: Response = await request(app).get(
      "/api/genres"
    );
    expect(getGenresResAfterDelete.status).toBe(200);
    expect(getGenresResAfterDelete.body.length).toBe(0);
  });
});
