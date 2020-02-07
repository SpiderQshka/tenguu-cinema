import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection, deleteGenre } from "../db/dbServices";
import { setNewGenre } from "../helpers/setRandomTestTables";
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
    const setGenreRes = await setNewGenre(app);

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    const getGenresRes: Response = await request(app).get("/api/genres");
    expect(getGenresRes.status).toBe(200);
    expect(getGenresRes.body.length).toBe(1);
  });
  it("get genre by id", async () => {
    const setGenreRes = await setNewGenre(app);

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
  it("delete genre", async () => {
    const setGenreRes = await setNewGenre(app);

    expect(setGenreRes.error.text).toBe(undefined);
    expect(setGenreRes.status).toBe(200);

    await deleteGenre({ _id: setGenreRes.body._id });

    const getGenresResAfterDelete: Response = await request(app).get(
      "/api/genres"
    );
    expect(getGenresResAfterDelete.status).toBe(200);
    expect(getGenresResAfterDelete.body.length).toBe(0);
  });
});
