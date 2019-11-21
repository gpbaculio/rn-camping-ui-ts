import { campingActionTypes, filtersPayloadType } from "./types";
import {
  SET_CAMPINGS,
  SET_LOCATION,
  SET_FILTERS,
  SET_LOADING,
  INITIAL_STATE
} from "./constants";

const campingsReducer = (state = INITIAL_STATE, action: campingActionTypes) => {
  switch (action.type) {
    case SET_CAMPINGS:
      return {
        ...state,
        spots: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...(action.payload as filtersPayloadType)
        }
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default campingsReducer;
