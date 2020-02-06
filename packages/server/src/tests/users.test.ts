import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
import faker from "faker";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearCollection("users");
});
beforeEach(async () => {
  await clearCollection("users");
});

describe("testing user routes", () => {
  it("get all users", async () => {
    const getUsersRes: Response = await request(app).get("/api/users");
    expect(getUsersRes.status).toBe(200);
    expect(getUsersRes.body.length).toBe(0);
  });
  it("create new user", async () => {
    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    const getUsersRes: Response = await request(app).get("/api/users");
    expect(getUsersRes.status).toBe(200);
    expect(getUsersRes.body.length).toBe(1);
  });
  it("change user", async () => {
    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    const changeUserRes: Response = await request(app)
      .put(`/api/users/${setUserRes.body._id}`)
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    expect(changeUserRes.error.text).toBe(undefined);
    expect(changeUserRes.status).toBe(200);
  });
  it("delete user", async () => {
    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      });

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    const deleteUserRes: Response = await request(app).delete(
      `/api/users/${setUserRes.body._id}`
    );

    expect(deleteUserRes.error.text).toBe(undefined);
    expect(deleteUserRes.status).toBe(200);

    const getUsersResAfterDelete: Response = await request(app).get(
      "/api/users"
    );
    expect(getUsersResAfterDelete.status).toBe(200);
    expect(getUsersResAfterDelete.body.length).toBe(0);
  });
});
