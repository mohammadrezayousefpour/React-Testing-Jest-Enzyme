import { combineReducers } from "redux";
import SuccessReducer from "./successReducer";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./SecretWordReducer";

export default combineReducers({
  success: SuccessReducer,
  guessedWords,
  secretWord,
});
