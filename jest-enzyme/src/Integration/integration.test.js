import { StoreFactory } from "../test/TestUtils";
import { guessWord } from "../Actions/index";

describe("guessWord action dispatcher ", () => {
  describe("no guessed words", () => {
    let Store;
    const secretWord = "party";
    const guessedWord = "train";
    const initialState = { secretWord };
    beforeEach(() => {
      Store = StoreFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      Store.dispatch(guessWord(guessedWord));
      const newState = Store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessWord: guessedWord,
            letterMatch: 3,
          },
        ],
      };
      expect(newState).toStrictEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {});
  });
  describe("some guessed words", () => {
    test("update state correctly for unsuccessful guess", () => {});
    test("update state correctly for successful guess", () => {});
  });
});
