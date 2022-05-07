import React from "react";
import Input from "../Input";
import { shallow } from "enzyme";

import { findAttr, StoreFactory } from "../../../test/TestUtils";
// import Store from "../../../configureStore";

const setup = (initialState = {}) => {
  const Store = StoreFactory(initialState);
  const wrapper = shallow(<Input store={Store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};
setup();
describe("Input Component is render or not", () => {
  describe("word has not been guessed", () => {
    test("render without error", () => {});
    test("render input box", () => {});
    test("render submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("render without error", () => {});
    test("does not render input box", () => {});
    test("does not render subnit button", () => {});
  });
});
