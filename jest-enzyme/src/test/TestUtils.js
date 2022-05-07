import PropTypes from "prop-types";
import rootReducer from "../Reducers/index";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../configureStore";

export const StoreFactory = (initialState) => {
  const Store = applyMiddleware(...middlewares)(createStore);
  return Store(rootReducer, initialState);
};

export const findAttr = (wrapper, value) => {
  return wrapper.find(`[className="${value}"]`);
};
export const checkProps = (component, expectedProps) => {
  const PorpsError = PropTypes.checkPropTypes(
    component.PropTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(PorpsError).toBeUndefined();
};
