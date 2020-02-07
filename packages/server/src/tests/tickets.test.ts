import request, { Response } from "supertest";
import { app } from "../server";
import { DBURL } from "../keys/keys";
import { connectDb, clearDb, deleteTicket } from "../db/dbServices";
import { setNewTicket } from "../helpers/setRandomTestTables";

beforeAll(async () => {
  await connectDb(DBURL).then(() => console.log("Connected to DB"));
});
afterAll(async () => {
  await clearDb();
});
beforeEach(async () => {
  await clearDb();
});

describe("testing tickets routes", () => {
  it("get all tickets", async () => {
    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(200);
    expect(getTicketsRes.body.length).toBe(0);
  });
  it("create new ticket", async () => {
    const setTicketRes = await setNewTicket(app);

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const getTicketsRes: Response = await request(app).get("/api/tickets");
    expect(getTicketsRes.status).toBe(200);
    expect(getTicketsRes.body.length).toBe(1);
  });
  it("get ticket by id", async () => {
    const setTicketRes = await setNewTicket(app);

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    const getTicketRes: Response = await request(app).get(
      `/api/tickets/${setTicketRes.body._id}`
    );

    expect(getTicketRes.error.text).toBe(undefined);
    expect(getTicketRes.status).toBe(200);
  });
  it("delete ticket", async () => {
    const setTicketRes = await setNewTicket(app);

    expect(setTicketRes.error.text).toBe(undefined);
    expect(setTicketRes.status).toBe(200);

    await deleteTicket({ _id: setTicketRes.body._id });

    const getTicketsResAfterDelete: Response = await request(app).get(
      "/api/tickets"
    );
    expect(getTicketsResAfterDelete.status).toBe(200);
    expect(getTicketsResAfterDelete.body.length).toBe(0);
  });
});
