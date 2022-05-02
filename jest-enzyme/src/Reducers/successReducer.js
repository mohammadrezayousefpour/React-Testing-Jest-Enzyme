import { actionTypes } from "../Actions";
const SuccessReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};
export default SuccessReducer;
