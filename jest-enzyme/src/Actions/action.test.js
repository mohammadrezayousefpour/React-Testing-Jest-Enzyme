import moxios from "moxios";

describe("get secret word action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("add response word to state", () => {});
});
