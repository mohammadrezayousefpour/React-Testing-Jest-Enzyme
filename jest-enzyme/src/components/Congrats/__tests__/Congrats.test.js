import React from "react";
import Congrats from "../Congrats";
import { shallow } from "enzyme";
import classes from "../Congrats.module.css";
import { findAttr, checkProps } from "../../../test/TestUtils";

const defaultProps = { success: false };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without crashing", () => {
  const wrapper = setup({ success: false });
  const comp = findAttr(wrapper, `${classes.Congrats}`);
  expect(comp.length).toBe(1);
});
test("render message congratolation when success props is true", () => {
  const wrapper = setup({ success: true });
  const message = findAttr(wrapper, `${classes.successText}`);
  // expect(message.text().length).not.toBe(0);
  expect(message.text()).toEqual("Congratolation! you guessed the word");
});

test("no render message congratolation when success props is false", () => {
  const wrapper = setup({ success: false });
  const message = findAttr(wrapper, `${classes.successText}`);
  expect(message.length).toBe(0);
});

test("check props type and handle error", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
