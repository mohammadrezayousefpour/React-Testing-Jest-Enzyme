import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./Reducers/index";

export const middlewares = [ReduxThunk];

const Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default Store;
