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

describe("testing comments routes", () => {
  it("get all comments", async () => {
    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(0);
  });
  it("create new comment", async () => {
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

    const setCommentRes: Response = await request(app)
      .post("/api/comments")
      .send({
        content: faker.lorem.sentence(),
        filmId: setFilmRes.body._id
      });

    expect(setCommentRes.error.text).toBe(undefined);
    expect(setCommentRes.status).toBe(200);

    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(1);
  });
  it("get comment by id", async () => {
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

    const setCommentRes: Response = await request(app)
      .post("/api/comments")
      .send({
        content: faker.lorem.sentence(),
        filmId: setFilmRes.body._id
      });

    const getCommentRes: Response = await request(app).get(
      `/api/comments/${setCommentRes.body._id}`
    );

    expect(getCommentRes.error.text).toBe(undefined);
    expect(getCommentRes.status).toBe(200);

    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(1);
  });
});
it("change comment", async () => {
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

  const setCommentRes: Response = await request(app)
    .post("/api/comments")
    .send({
      content: faker.lorem.sentence(),
      filmId: setFilmRes.body._id
    });

  const changeCommentRes: Response = await request(app)
    .put(`/api/comments/${setCommentRes.body._id}`)
    .send({
      content: faker.lorem.sentence(),
      filmId: setFilmRes.body._id
    });

  expect(changeCommentRes.error.text).toBe(undefined);
  expect(changeCommentRes.status).toBe(200);
});
it("delete comment", async () => {
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

  const setCommentRes: Response = await request(app)
    .post("/api/comments")
    .send({
      content: faker.lorem.sentence(),
      filmId: setFilmRes.body._id
    });

  const deleteCommentRes: Response = await request(app).delete(
    `/api/comments/${setCommentRes.body._id}`
  );

  expect(deleteCommentRes.error.text).toBe(undefined);
  expect(deleteCommentRes.status).toBe(200);

  const getCommentsResAfterDelete: Response = await request(app).get(
    "/api/comments"
  );
  expect(getCommentsResAfterDelete.status).toBe(200);
  expect(getCommentsResAfterDelete.body.length).toBe(0);
});
