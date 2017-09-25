import { ACTION_TYPES } from "../actions/action-geolocation";

export default function (state = {
  latitude: 0,
  longitude: 0,
}, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_GEOLOCATION: {
      const { latitude, longitude } = action;
      return { latitude, longitude };
    }
    case ACTION_TYPES.NO_SUPPORT_GEOLOCATION:
    default:
      return state;
  }
}
