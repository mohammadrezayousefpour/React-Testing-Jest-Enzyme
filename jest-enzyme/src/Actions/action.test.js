import moxios, { requests } from "moxios";
import { StoreFactory } from "../test/TestUtils";
import { getSecretWord } from "./";

describe("get secret word action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("add response word to state", () => {
    const secretWord = "party";
    const Store = StoreFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        staus: 200,
        response: secretWord,
      });

      Store.dispatch(getSecretWord).then(() => {
        const newState = Store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
    });
  });
});
