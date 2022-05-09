import React from "react";
import { shallow } from "enzyme";
import GuessedWord from "../GuessedWord";
import { checkProps, findAttr } from "../../../test/TestUtils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatched: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWord {...setupProps} />);
  return wrapper;
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

describe("if there are some guessed words", () => {
  let wrapper;

  const quessedWordsProps = [
    {
      guessedWord: "train",
      letterMatched: 3,
    },
    {
      guessedWord: "agile",
      letterMatched: 1,
    },
    {
      guessedWord: "party",
      letterMatched: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords: quessedWordsProps });
  });
  test("render without error", () => {
    const component = findAttr(wrapper, "guessedWordsComponent");
    expect(component.length).toBe(1);
  });
  test("render guess word section", () => {
    const guessWordsSection = findAttr(wrapper, "guessWordSection");
    expect(guessWordsSection.length).toBe(1);
  });
  test("render correct number of guess words", () => {
    const guessedWordNumbers = findAttr(wrapper, "eachQuessWord");
    expect(guessedWordNumbers.length).toBe(quessedWordsProps.length);
  });
});
