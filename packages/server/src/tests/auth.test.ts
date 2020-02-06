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

describe("testing auth routes", () => {
  it("register new user", async () => {
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
  it("login user", async () => {
    const passwordWithoutHash = faker.internet.password();
    const setUserRes: Response = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: passwordWithoutHash,
        email: faker.internet.email()
      });

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);

    const loginUserRes: Response = await request(app)
      .post("/api/auth/login")
      .send({
        password: passwordWithoutHash,
        email: setUserRes.body.email
      });

    expect(loginUserRes.error.text).toBe(undefined);
    expect(loginUserRes.status).toBe(200);
  });
});
