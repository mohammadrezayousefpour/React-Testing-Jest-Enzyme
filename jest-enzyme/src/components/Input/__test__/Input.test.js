import React from "react";
import Input, { UnconnectedInput } from "../Input";
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

describe("guessWord action creator call", () => {
  let wrapper;
  let guessedWordMock;
  const guessedWord = "mohammadreza";
  beforeEach(() => {
    guessedWordMock = jest.fn();
    const props = {
      guessWord: guessedWordMock,
    };
    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.setState({ currentGuess: guessedWord });

    const submitButton = findAttr(wrapper, "submitButton");
    submitButton.simulate("click", { preventDefault() {} });
  });
  test("call guessWord when button is clicked", () => {
    const guessWordCallCount = guessedWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test("call guessWord with Input val as argument", () => {
    console.log(guessedWordMock.mock.calls);
    const guessWordArg = guessedWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test("inputBox will be empty", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
