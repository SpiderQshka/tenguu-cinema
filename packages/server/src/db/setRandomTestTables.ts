import request, { Response } from "supertest";
import faker from "faker";
import express from "express";

export const setNewGenre = async (
  app: express.Express,
  name?: string
): Promise<Response> => {
  return await request(app)
    .post("/api/genres")
    .send({
      name: name || faker.hacker.noun() + faker.hacker.noun()
    });
};

export const setNewHall = async (
  app: express.Express,
  settings?: {
    rows: number;
    seatNumber: number;
  }
): Promise<Response> => {
  return await request(app)
    .post("/api/halls")
    .send({
      numberOfRows: faker.random.number(),
      seatsOnRow: faker.random.number(),
      name: faker.random.word() + faker.random.word(),
      ...settings
    });
};

export const setNewFilm = async (
  app: express.Express,
  settings?: {
    name: string;
    genreId: string;
    duration: number;
    trailerLink: string;
    rating: number;
  }
): Promise<Response> => {
  const setGenreRes = await setNewGenre(app);

  return await request(app)
    .post("/api/films")
    .send({
      name: faker.random.word(),
      genreId: setGenreRes.body._id,
      duration: faker.random.number(),
      trailerLink: faker.internet.domainName(),
      rating: 5.8,
      ...settings
    });
};

export const setNewComment = async (
  app: express.Express,
  content?: string
): Promise<Response> => {
  const setFilmRes = await setNewFilm(app);

  return await request(app)
    .post("/api/comments")
    .send({
      content: faker.lorem.sentence(),
      filmId: setFilmRes.body._id
    });
};

export const setNewSession = async (
  app: express.Express,
  settings?: {
    filmId: string;
    dateTime: number;
    price: number;
    hallId: string;
  }
): Promise<Response> => {
  const setFilmRes = await setNewFilm(app);
  const setHallRes = await setNewHall(app);

  return await request(app)
    .post("/api/sessions")
    .send({
      filmId: setFilmRes.body._id,
      dateTime: faker.random.number(),
      price: faker.random.number(),
      hallId: setHallRes.body._id,
      ...settings
    });
};

export const setNewUser = async (
  app: express.Express,
  settings?: {
    username?: string;
    password?: string;
    email?: string;
  }
): Promise<Response> => {
  return await request(app)
    .post("/api/auth/register")
    .send({
      username: faker.name.findName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      ...settings
    });
};

export const setNewTicket = async (
  app: express.Express,
  settings?: {
    sessionId: string;
    status: number;
    seat: number;
    userId: string;
  }
): Promise<Response> => {
  const setSessionRes = await setNewSession(app);
  const setUserRes = await setNewUser(app);

  return await request(app)
    .post("/api/tickets")
    .send({
      sessionId: setSessionRes.body._id,
      status: "active",
      seat: {
        row: 1,
        seatNumber: 1
      },
      userId: setUserRes.body._id,
      ...settings
    });
};
