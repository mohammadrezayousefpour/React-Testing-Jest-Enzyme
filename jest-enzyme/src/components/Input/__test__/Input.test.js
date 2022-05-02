import React from "react";
import Input from "../Input";
import { shallow } from "enzyme";
import { useSelector } from "react-redux";

import { findAttr } from "../../../test/TestUtils";
const Store = useSelector((store) => store);
const setup = (initialState = {}) => {
  const wrapper = shallow(<Input store={Store} />);
  console.log(wrapper.debug);
  return wrapper;
};
setup();
describe("Input Component is render or not", () => {
  describe("word has not been guessed", () => {
    test("render without error", () => {});
    test("render input box", () => {});
    test("render subnit button", () => {});
  });
  describe("word has been guessed", () => {
    test("render without error", () => {});
    test("does not render input box", () => {});
    test("does not render subnit button", () => {});
  });
});
