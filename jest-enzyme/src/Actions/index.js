import { getLetterMatch } from "../helpers";
import axios from "axios";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
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

export const getSecretWord = () => {
  return async function (dispach) {
    return axios
      .get("https://random-word-api.herokuapp.com/word")
      .then((response) => {
        console.log(response);
        dispach({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data[0],
        });
      });
  };
};
