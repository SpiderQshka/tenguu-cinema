import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import faker from "faker";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
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
  it("create new film", async () => {
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

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    const getFilmsRes: Response = await request(app).get("/api/films");
    expect(getFilmsRes.status).toBe(200);
    expect(getFilmsRes.body.length).toBe(1);
  });
  it("get film by id", async () => {
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

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    const getFilmRes: Response = await request(app).get(
      `/api/films/${setFilmRes.body._id}`
    );

    expect(getFilmRes.error.text).toBe(undefined);
    expect(getFilmRes.status).toBe(200);

    const getFilmsRes: Response = await request(app).get("/api/films");
    expect(getFilmsRes.status).toBe(200);
    expect(getFilmsRes.body.length).toBe(1);
  });
  it("change film", async () => {
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

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    const changeFilmRes: Response = await request(app)
      .put(`/api/films/${setFilmRes.body._id}`)
      .send({
        name: faker.random.word(),
        genreId: setGenreRes.body._id,
        duration: faker.random.number(),
        trailerLink: faker.internet.domainName(),
        rating: 5.8
      });

    expect(changeFilmRes.error.text).toBe(undefined);
    expect(changeFilmRes.status).toBe(200);
  });
  it("delete film", async () => {
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

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    const deleteFilmRes: Response = await request(app).delete(
      `/api/films/${setFilmRes.body._id}`
    );

    expect(deleteFilmRes.error.text).toBe(undefined);
    expect(deleteFilmRes.status).toBe(200);

    const getFilmsResAfterDelete: Response = await request(app).get(
      "/api/films"
    );
    expect(getFilmsResAfterDelete.error.text).toBe(undefined);
    expect(getFilmsResAfterDelete.status).toBe(200);
  });
  it("delete film with connected session", async () => {
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

    const deleteFilmRes: Response = await request(app).delete(
      `/api/films/${setFilmRes.body._id}`
    );

    expect(deleteFilmRes.error.text).toBe(
      "There are some sessions on this film. If you want to delete the film, delete sessions before"
    );
    expect(deleteFilmRes.status).toBe(400);
  });
});
