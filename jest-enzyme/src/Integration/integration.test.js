import { StoreFactory } from "../test/TestUtils";
import { guessWord } from "../Actions/index";

describe("guessWord action dispatcher ", () => {
  describe("no guessed words", () => {
    let Store;
    const secretWord = "party";
    const unsuccessfulGuessedWord = "train";
    const initialState = { secretWord };
    beforeEach(() => {
      Store = StoreFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      Store.dispatch(guessWord(unsuccessfulGuessedWord));
      const newState = Store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessWord: unsuccessfulGuessedWord,
            letterMatch: 3,
          },
        ],
      };
      expect(newState).toStrictEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      Store.dispatch(guessWord(secretWord));
      const newState = Store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessWord: secretWord,
            letterMatch: 5,
          },
        ],
      };
      expect(newState).toStrictEqual(expectedState);
    });
  });
  describe("some guessed words", () => {
    const secretWord = "party";
    const unsuccessfulGuessedWord = "train";
    const guessedWordsArray = [{ guessWord: "agile", letterMatch: 1 }];
    const initialState = { secretWord, guessedWordsArray };
    let Store;
    beforeEach(() => {
      Store = StoreFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      Store.dispatch(guessWord(unsuccessfulGuessedWord));
      const newState = Store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWordsArray,
          { guessWord: unsuccessfulGuessedWord, letterMatch: 3 },
        ],
      };
      expect(newState).toStrictEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      Store.dispatch(guessWord(secretWord));
      const newState = Store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWordsArray,
          { guessWord: secretWord, letterMatch: 5 },
        ],
      };
      expect(newState).toStrictEqual(expectedState);
    });
  });
});
