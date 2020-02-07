import request, { Response } from "supertest";
import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearDb, deleteSession } from "../db/dbServices";
import { setNewSession } from "../helpers/setRandomTestTables";

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
    const setSessionRes = await setNewSession(app);

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    const getSessionsRes: Response = await request(app).get("/api/sessions");
    expect(getSessionsRes.status).toBe(200);
    expect(getSessionsRes.body.length).toBe(1);
  });
  it("get session by id", async () => {
    const setSessionRes = await setNewSession(app);

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
  it("delete session", async () => {
    const setSessionRes = await setNewSession(app);

    expect(setSessionRes.error.text).toBe(undefined);
    expect(setSessionRes.status).toBe(200);

    await deleteSession({ _id: setSessionRes.body._id });

    const getSessionsResAfterDelete: Response = await request(app).get(
      "/api/sessions"
    );
    expect(getSessionsResAfterDelete.status).toBe(200);
    expect(getSessionsResAfterDelete.body.length).toBe(0);
  });
});
