import { combineReducers } from "redux";
import SuccessReducer from "./successReducer";

export default combineReducers({ success: SuccessReducer });
