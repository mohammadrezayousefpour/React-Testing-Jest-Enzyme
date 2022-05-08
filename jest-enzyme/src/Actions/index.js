import { getLetterMatch } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => {
  return function (dispach, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatch(guessedWord, secretWord);

    dispach({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatched: letterMatchCount,
      },
    });

    if (guessedWord === secretWord) {
      dispach({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};
