import * as ActionTypes from "./ActionTypes";
import { InitialFeedback } from "./forms";

export const feedbackAdd = (
  state = {
    feedbackAdd: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedbackAdd: state.feedbackAdd.concat(feedback) };

    default:
      return state;
  }
};
