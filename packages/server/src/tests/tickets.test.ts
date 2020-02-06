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

describe("testing tickets routes", () => {
  it("get all tickets", async () => {
    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(200);
    expect(getTicketsRes.body.length).toBe(0);
  });
  it("create new ticket", async () => {
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
        dateTime: faker.random.number() * 1000,
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    const setTicketRes: Response = await request(app)
      .post("/api/tickets")
      .send({
        sessionId: setSessionRes.body._id,
        status: "active",
        seat: {
          row: 1,
          seatNumber: 1
        },
        userId: setUserRes.body._id
      });

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(200);
    expect(getTicketsRes.body.length).toBe(1);
  });
  it("get ticket by id", async () => {
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
        dateTime: faker.random.number() * 1000,
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    const setTicketRes: Response = await request(app)
      .post("/api/tickets")
      .send({
        sessionId: setSessionRes.body._id,
        status: "active",
        seat: {
          row: 1,
          seatNumber: 1
        },
        userId: setUserRes.body._id
      });

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const getTicketRes: Response = await request(app).get(
      `/api/tickets/${setTicketRes.body._id}`
    );

    expect(getTicketRes.error.text).toBe(undefined);
    expect(getTicketRes.status).toBe(200);

    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(200);
    expect(getTicketsRes.body.length).toBe(1);
  });
  it("change ticket", async () => {
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
        dateTime: faker.random.number() * 1000,
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    const setTicketRes: Response = await request(app)
      .post("/api/tickets")
      .send({
        sessionId: setSessionRes.body._id,
        status: "active",
        seat: {
          row: 1,
          seatNumber: 1
        },
        userId: setUserRes.body._id
      });

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const changeTicketRes: Response = await request(app)
      .put(`/api/tickets/${setTicketRes.body._id}`)
      .send({
        sessionId: setSessionRes.body._id,
        status: "active",
        seat: {
          row: 2,
          seatNumber: 2
        },
        userId: setUserRes.body._id
      });

    expect(changeTicketRes.error.text).toBe(undefined);
    expect(changeTicketRes.status).toBe(200);
  });
  it("delete ticket", async () => {
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
        dateTime: faker.random.number() * 1000,
        price: faker.random.number(),
        hallId: setHallRes.body._id
      });

    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    const setTicketRes: Response = await request(app)
      .post("/api/tickets")
      .send({
        sessionId: setSessionRes.body._id,
        status: "active",
        seat: {
          row: 1,
          seatNumber: 1
        },
        userId: setUserRes.body._id
      });

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const deleteTicketRes: Response = await request(app).delete(
      `/api/tickets/${setTicketRes.body._id}`
    );

    expect(deleteTicketRes.error.text).toBe(undefined);
    expect(deleteTicketRes.status).toBe(200);

    const getTicketsResAfterDelete: Response = await request(app).get(
      "/api/tickets"
    );
    expect(getTicketsResAfterDelete.status).toBe(200);
    expect(getTicketsResAfterDelete.body.length).toBe(0);
  });
});
