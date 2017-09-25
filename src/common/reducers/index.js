import { combineReducers } from "redux";
import GeoLocationReducer from "./reducer-geolocation";
import TFLReducer from "./reducer-tfl";

const allReducers = combineReducers({
  geolocation: GeoLocationReducer,
  tfl: TFLReducer,
});

export default allReducers;
