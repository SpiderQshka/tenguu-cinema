import { app } from "../server";
import { connectDb } from "../models/index";
import { DBURL } from "../keys/keys";
import request, { Response } from "supertest";

beforeAll(() => {
  connectDb(DBURL).then(() => console.log("DB connected"));
});

describe("testing user routes", () => {
  it("get all users", async () => {
    const res: Response = await request(app).get("/api/users");
    expect(res.status).toBe(200);
  });

  //   it("try to post user with existing email", async () => {
  //     const res: Response = await request(app)
  //       .post("/api/users")
  //       .send({
  //         username: "Rems",
  //         password: "7654321",
  //         email: "333@gmail.com"
  //       });
  //     expect(res.text).toBe("Email already exists");
  //     expect(res.status).toBe(400);
  //   });

  //   it("try to get user with unexisting id", async () => {
  //     const res: Response = await request(app).get(
  //       "/api/users/5e31b89e1daec03224617a60"
  //     );
  //     expect(res.status).toBe(404);
  //   });

  //   it("update user with existing id", async () => {
  //     const res: Response = await request(app)
  //       .put("/api/users/5e32d23dc62a6723b84aa740")
  //       .send({
  //         username: "Panic"
  //       });
  //     expect(res.status).toBe(200);
  //     expect(res.text).toBe("Updated successfully");
  //   });

  //   it("remove user with unexisting id", async () => {
  //     const res: Response = await request(app).delete(
  //       "/api/users/5e31b89e1daec03224617a61"
  //     );
  //     expect(res.status).toBe(404);
  //     expect(res.text).toBe("Not found");
  //   });
});
