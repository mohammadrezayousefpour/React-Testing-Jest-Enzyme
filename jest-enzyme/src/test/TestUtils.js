import PropTypes from "prop-types";
import rootReducer from "../Reducers/index";
import { createStore } from "redux";

export const StoreFactory = (initialState) => {
  return createStore(rootReducer, initialState);
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
