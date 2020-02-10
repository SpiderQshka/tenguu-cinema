import { app } from "../server";
import { DBTESTURL } from "../keys/keys";
import { connectDb, clearDb, deleteComment } from "../db/dbServices";
import { setNewComment } from "../db/setRandomTestTables";
import request, { Response } from "supertest";

beforeAll(async () => {
  await connectDb(DBTESTURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearDb();
});
beforeEach(async () => {
  await clearDb();
});

describe("testing comments routes", () => {
  it("get all comments", async () => {
    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(0);
  });
  it("create new comment", async () => {
    const setCommentRes = await setNewComment(app);

    expect(setCommentRes.error.text).toBe(undefined);
    expect(setCommentRes.status).toBe(200);

    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(1);
  });
  it("get comment by id", async () => {
    const setCommentRes = await setNewComment(app);

    const getCommentRes: Response = await request(app).get(
      `/api/comments/${setCommentRes.body._id}`
    );

    expect(getCommentRes.error.text).toBe(undefined);
    expect(getCommentRes.status).toBe(200);

    const getCommentsRes: Response = await request(app).get("/api/comments");
    expect(getCommentsRes.status).toBe(200);
    expect(getCommentsRes.body.length).toBe(1);
  });
});
it("delete comment", async () => {
  const setCommentRes = await setNewComment(app);

  const getCommentRes: Response = await request(app).get(
    `/api/comments/${setCommentRes.body._id}`
  );

  expect(getCommentRes.error.text).toBe(undefined);
  expect(getCommentRes.status).toBe(200);

  await deleteComment({ _id: setCommentRes.body._id });

  const getCommentsResAfterDelete: Response = await request(app).get(
    "/api/comments"
  );
  expect(getCommentsResAfterDelete.status).toBe(200);
  expect(getCommentsResAfterDelete.body.length).toBe(0);
});
