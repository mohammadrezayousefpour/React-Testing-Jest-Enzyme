import { getLetterMatch } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessWord) => {
  return function (dispach, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatch(guessWord, secretWord);

    dispach({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessWord,
        letterMatch: letterMatchCount,
      },
    });

    if (guessWord === secretWord) {
      dispach({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};
