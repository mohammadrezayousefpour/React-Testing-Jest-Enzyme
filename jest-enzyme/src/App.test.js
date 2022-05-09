import React from "react";
import App, { UnconnectedApp } from "./App";
import { shallow } from "enzyme";
import { StoreFactory } from "./test/TestUtils";

const setup = (props = {}) => {
  const Store = StoreFactory(props);
  const wrapper = shallow(<App store={Store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux property", () => {
  test("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("has access to guessedwords props", () => {
    const guessedWords = [{ guessedWord: "mohammadreza", letterMatched: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsprops = wrapper.instance().props.guessedWords;
    expect(guessedWords).toEqual(guessedWords);
  });
  test("has access to secret word props", () => {
    const secretWord = "enzymeTest";
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test("has access to getSecretWord", () => {
    const wrapper = setup();
    const getSecretWordAction = wrapper.instance().props.getSecretWord;
    expect(getSecretWordAction).toBeInstanceOf(Function);
  });
});

test("getSecretWord runs on App Mount", () => {
  const getSecretWordMock = jest.fn();

  const wrapper = shallow(<UnconnectedApp getSecretWord={getSecretWordMock} />);
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
