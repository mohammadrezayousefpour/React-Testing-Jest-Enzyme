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
            guessedWord: unsuccessfulGuessedWord,
            letterMatched: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      Store.dispatch(guessWord(secretWord));
      const newState = Store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatched: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessed words", () => {
    const secretWord = "party";
    const unsuccessfulGuessedWord = "train";
    const guessedWords = [{ guessedWord: "agile", letterMatched: 1 }];
    const initialState = { secretWord, guessedWords };
    let Store;
    beforeEach(() => {
      Store = StoreFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      Store.dispatch(guessWord(unsuccessfulGuessedWord));
      const newState = Store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuessedWord, letterMatched: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      Store.dispatch(guessWord(secretWord));
      const newState = Store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatched: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
