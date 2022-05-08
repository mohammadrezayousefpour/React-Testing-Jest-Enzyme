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
  return wrapper;
};

describe("Input Component is render or not", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findAttr(wrapper, "InputContainer");
      expect(component.length).toBe(1);
    });
    test("render input box", () => {
      const inputBox = findAttr(wrapper, "inputBox");
      expect(inputBox.length).toBe(1);
    });
    test("render submit button", () => {
      const submitButton = findAttr(wrapper, "submitButton");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findAttr(wrapper, "InputContainer");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findAttr(wrapper, "inputBox");
      expect(inputBox.length).toBe(0);
    });
    test("does not render subnit button", () => {
      const submitButton = findAttr(wrapper, "submitButton");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has access to success props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });
  test("has access to guessWord action creator as a function props", () => {
    const wrapper = setup();
    const guessWordProps = wrapper.instance().props.guessWord;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});
