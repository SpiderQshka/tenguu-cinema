import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearDb } from "../db/dbServices";
import faker from "faker";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
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
  it("create new session", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    const setFilmRes: Response = await request(app)
      .post("/api/films")
      .send({
        name: faker.random.word(),
        genreId: setGenreRes.body._id,
        duration: faker.random.number(),
        trailerLink: faker.internet.domainName(),
        rating: 5.8
      });

    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.hacker.noun()
      });

    const setSessionRes: Response = await request(app)
      .post("/api/sessions")
      .send({
        filmId: setFilmRes.body._id,
        dateTime: faker.random.number(),
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    const getSessionsRes: Response = await request(app).get("/api/sessions");
    expect(getSessionsRes.status).toBe(200);
    expect(getSessionsRes.body.length).toBe(1);
  });
  it("get session by id", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    const setFilmRes: Response = await request(app)
      .post("/api/films")
      .send({
        name: faker.random.word(),
        genreId: setGenreRes.body._id,
        duration: faker.random.number(),
        trailerLink: faker.internet.domainName(),
        rating: 5.8
      });

    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.hacker.noun()
      });

    const setSessionRes: Response = await request(app)
      .post("/api/sessions")
      .send({
        filmId: setFilmRes.body._id,
        dateTime: faker.random.number(),
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    const getSessionRes: Response = await request(app).get(
      `/api/sessions/${setSessionRes.body._id}`
    );

    expect(getSessionRes.error.text).toBe(undefined);
    expect(getSessionRes.status).toBe(200);

    const getSessionsRes: Response = await request(app).get("/api/sessions");
    expect(getSessionsRes.status).toBe(200);
    expect(getSessionsRes.body.length).toBe(1);
  });
  it("change session", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    const setFilmRes: Response = await request(app)
      .post("/api/films")
      .send({
        name: faker.random.word(),
        genreId: setGenreRes.body._id,
        duration: 60,
        trailerLink: faker.internet.domainName(),
        rating: 5.8
      });

    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.hacker.noun()
      });

    const setSessionRes: Response = await request(app)
      .post("/api/sessions")
      .send({
        filmId: setFilmRes.body._id,
        dateTime: faker.random.number() * 1000,
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    const changeSessionRes: Response = await request(app)
      .put(`/api/sessions/${setSessionRes.body._id}`)
      .send({
        filmId: setFilmRes.body._id,
        dateTime: faker.random.number(),
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    expect(changeSessionRes.error.text).toBe(undefined);
    expect(changeSessionRes.status).toBe(200);
  });
  it("delete session", async () => {
    const setGenreRes: Response = await request(app)
      .post("/api/genres")
      .send({
        name: faker.hacker.noun() + faker.hacker.noun()
      });

    const setFilmRes: Response = await request(app)
      .post("/api/films")
      .send({
        name: faker.random.word(),
        genreId: setGenreRes.body._id,
        duration: faker.random.number(),
        trailerLink: faker.internet.domainName(),
        rating: 5.8
      });

    const setHallRes: Response = await request(app)
      .post("/api/halls")
      .send({
        numberOfRows: faker.random.number(),
        seatsOnRow: faker.random.number(),
        name: faker.hacker.noun()
      });

    const setSessionRes: Response = await request(app)
      .post("/api/sessions")
      .send({
        filmId: setFilmRes.body._id,
        dateTime: faker.random.number(),
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    const deleteSessionRes: Response = await request(app).delete(
      `/api/sessions/${setSessionRes.body._id}`
    );

    expect(deleteSessionRes.error.text).toBe(undefined);
    expect(deleteSessionRes.status).toBe(200);

    const getSessionsResAfterDelete: Response = await request(app).get(
      "/api/sessions"
    );
    expect(getSessionsResAfterDelete.status).toBe(200);
    expect(getSessionsResAfterDelete.body.length).toBe(0);
  });
});
