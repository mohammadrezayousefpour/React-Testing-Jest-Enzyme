import { actionTypes } from "../Actions";
const SuccessReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
export default SuccessReducer;
