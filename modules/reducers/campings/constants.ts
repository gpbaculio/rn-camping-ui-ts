import { initStateType } from "./types";
export const SET_CAMPINGS = "Spots/campings/SET_CAMPINGS";
export const SET_LOCATION = "Spots/campings/SET_LOCATION";
export const SET_FILTERS = "Spots/campings/SET_FILTERS";
export const SET_LOADING = "Spots/campings/SET_LOADING";

export const INITIAL_STATE: initStateType = {
  spots: [],
  mylocation: {
    latitude: 37.79035,
    longitude: -122.4384
  },
  filters: {
    sort: "distance",
    type: "all",
    price: "free",
    option_full: true,
    option_rated: true,
    option_free: false
  },
  loading: false
};
