import React from "react";
import { shallow } from "enzyme";
import GuessedWord from "../GuessedWord";
import { checkProps, findAttr } from "../../../test/TestUtils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatched: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWord {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWord, defaultProps);
});

describe("if there are no guessed words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("render without error", () => {
    const component = findAttr(wrapper, "guessedWordsComponent");
    expect(component.length).toBe(1);
  });
  test("is rendering you should quess text?", () => {
    const content = findAttr(wrapper, "guessText");
    expect(content.text().length).not.toBe(0);
  });
});

describe("if there are some guessed words", () => {});
