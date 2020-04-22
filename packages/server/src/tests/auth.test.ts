import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearCollection } from "../db/dbServices";
// import { setNewUser } from "../db/setRandomTestTables";
import faker from "faker";
import request, { Response } from "supertest";
import addAdmin from "../seed";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => addAdmin());
});
afterAll(async () => {
  await clearCollection("users");
});
beforeEach(async () => {
  await clearCollection("users");
});

describe("testing auth routes", () => {
  it("register new user", async () => {
    const setUserRes = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      });

    expect(setUserRes.error.text).toBe(undefined);
    expect(setUserRes.status).toBe(200);
    const getUsersRes: Response = await request(app).get("/api/users");
    expect(getUsersRes.status).toBe(401);
  });
  it("login user", async () => {
    const passwordWithoutHash = faker.internet.password();
    const setUserRes = await request(app)
      .post("/api/auth/register")
      .send({
        username: faker.name.findName(),
        password: passwordWithoutHash,
        email: faker.internet.email(),
      });

    expect(setUserRes.status).toBe(200);
    expect(setUserRes.error.text).toBe(undefined);

    const loginUserRes: Response = await request(app)
      .post("/api/auth/login")
      .send({
        password: passwordWithoutHash,
        email: setUserRes.body.email,
      });

    expect(loginUserRes.error.text).toBe(undefined);
    expect(loginUserRes.status).toBe(200);
  });
});
