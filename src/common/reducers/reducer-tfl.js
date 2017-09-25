import { ACTION_TYPES } from "../actions/action-tfl";

export default function (state = {
  disruptions: [],
}, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_DISRUPTIONS: {
      return { ...state, disruptions: action.payload };
    }
    default:
      return state;
  }
}
