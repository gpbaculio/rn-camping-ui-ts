import {
  SET_CAMPINGS,
  SET_LOCATION,
  SET_FILTERS,
  SET_LOADING
} from "./constants";
import { Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../index";

// Actions
export const setCampings = (
  payload
): ThunkAction<void, RootState, null, Action<string>> => dispatch => {
  dispatch({
    type: SET_CAMPINGS,
    payload
  });
};
export const setLocation = (
  payload
): ThunkAction<void, RootState, null, Action<string>> => dispatch =>
  dispatch({
    type: SET_LOCATION,
    payload
  });

export const setFilters = (
  payload
): ThunkAction<void, RootState, null, Action<string>> => dispatch =>
  dispatch({
    type: SET_FILTERS,
    payload
  });

export const setLoading = (
  payload
): ThunkAction<void, RootState, null, Action<string>> => dispatch =>
  dispatch({
    type: SET_LOADING,
    payload
  });
