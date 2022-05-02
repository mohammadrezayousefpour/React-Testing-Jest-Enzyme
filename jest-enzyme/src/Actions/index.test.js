import { actionTypes, correctGuess } from "./index";

describe("correctGuess", () => {
  test("returns an action with type 'CORRECT_GUESS'", () => {
    var action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
