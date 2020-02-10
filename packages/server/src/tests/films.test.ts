import request, { Response } from "supertest";
import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection, deleteFilm } from "../db/dbServices";
import { setNewFilm } from "../db/setRandomTestTables";

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
  it("create new film", async () => {
    const setFilmRes = await setNewFilm(app);

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    const getFilmsRes: Response = await request(app).get("/api/films");
    expect(getFilmsRes.status).toBe(200);
    expect(getFilmsRes.body.length).toBe(1);
  });
  it("get film by id", async () => {
    const setFilmRes = await setNewFilm(app);

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

  it("delete film", async () => {
    const setFilmRes = await setNewFilm(app);

    expect(setFilmRes.error.text).toBe(undefined);
    expect(setFilmRes.status).toBe(200);

    await deleteFilm({ _id: setFilmRes.body._id });

    const getFilmsResAfterDelete: Response = await request(app).get(
      "/api/films"
    );
    expect(getFilmsResAfterDelete.error.text).toBe(undefined);
    expect(getFilmsResAfterDelete.status).toBe(200);
  });
});
