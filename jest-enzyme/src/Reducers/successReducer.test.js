import { actionTypes } from "../Actions";
import SuccessReducer from "./successReducer";

test("return it's initial state that is false when no action passed", () => {
  const newState = SuccessReducer(undefined, {});
  expect(newState).toBe(false);
});

test("return true when correct guess passed", () => {
  const newState = SuccessReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
