import router from "../routes/index";

describe("testing basic queries", () => {
  it("routes should be defined", () => {
    // for (let key in router) {
    expect(router.films).toBeDefined();
    // }
  });
});
