import { campingType } from "../../../mock/campings";
import {
  SET_CAMPINGS,
  SET_FILTERS,
  SET_LOADING,
  SET_LOCATION
} from "./constants";

export interface mylocationType {
  latitude: number;
  longitude: number;
}

export interface filtersType {
  sort: string;
  type: string;
  price: string;
  option_full: boolean;
  option_rated: boolean;
  option_free: boolean;
}

export type filtersTypeProps = keyof filtersType;
export type filtersTypeValues = filtersType[filtersTypeProps];
export type filtersPayloadType = { filtersTypeProps: filtersTypeValues };

export interface initStateType {
  spots: string[];
  mylocation: mylocationType;
  filters: filtersType;
  loading: boolean;
}

export interface campingReturnTypes {
  type:
    | typeof SET_CAMPINGS
    | typeof SET_FILTERS
    | typeof SET_LOADING
    | typeof SET_LOCATION;
  payload: string | boolean | filtersPayloadType | campingType[];
}

export type campingActionTypes = campingReturnTypes;
