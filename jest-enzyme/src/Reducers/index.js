import { combineReducers } from "redux";
import SuccessReducer from "./successReducer";
import guessedWords from "./guessedWordsReducer";

export default combineReducers({ success: SuccessReducer, guessedWords });
