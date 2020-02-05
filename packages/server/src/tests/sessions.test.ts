import { app } from "../server";
import { connectDb } from "../models/index";
import { DBURL } from "../keys/keys";
import request, { Response } from "supertest";

beforeAll(() => {
  connectDb(DBURL).then(() => console.log("DB connected"));
});

describe("testing genres routes", () => {
  it("get all genres", async () => {
    const res: Response = await request(app).get("/api/genres");
    expect(res.status).toBe(200);
  });

  //   it("try to post genre with existing name", async () => {
  //     const res: Response = await request(app)
  //       .post("/api/genres")
  //       .send({
  //         name: "fantasy"
  //       });
  //     expect(res.text).toBe("Genre already exists");
  //     expect(res.status).toBe(400);
  //   });

  //   it("try to get genre with unexisting id", async () => {
  //     const res: Response = await request(app).get(
  //       "/api/genres/5e31b89e1daec03224617a60"
  //     );
  //     expect(res.status).toBe(404);
  //   });

  //   it("update genre with existing id", async () => {
  //     const res: Response = await request(app)
  //       .put("/api/genres/5e343140efa90b16149cb1e8")
  //       .send({
  //         username: "Mystery"
  //       });
  //     expect(res.status).toBe(200);
  //     expect(res.text).toBe("Updated successfully");
  //   });

  //   it("try to remove genre with unexisting id", async () => {
  //     const res: Response = await request(app).delete(
  //       "/api/genres/5e31b89e1daec03224617a61"
  //     );
  //     expect(res.status).toBe(404);
  //     expect(res.text).toBe("Not found");
  //   });
});
