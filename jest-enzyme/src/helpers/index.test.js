import React from "react";
import { getLetterMatch } from "./";

describe("get letter match count", () => {
  const secretWord = "party";

  test("does it return correct answer when that two words dont have match words", () => {
    const asnwerOfFunction = getLetterMatch("bones", secretWord);
    expect(asnwerOfFunction).toBe(0);
  });
  test("does it return correct answer when they have 3 matched words", () => {
    const asnwerOfFunction = getLetterMatch("train", secretWord);
    expect(asnwerOfFunction).toBe(3);
  });
  test("does it return correct answer when they have duplicated letters", () => {
    const asnwerOfFunction = getLetterMatch("parka", secretWord);
    expect(asnwerOfFunction).toBe(3);
  });
  test("does it return correct answer when they are similar with each other", () => {
    const asnwerOfFunction = getLetterMatch("party", secretWord);
    expect(asnwerOfFunction).toBe(5);
  });
});
