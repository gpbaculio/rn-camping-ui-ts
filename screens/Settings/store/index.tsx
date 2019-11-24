import React, { createContext, useContext, useReducer } from "react";

interface SettingsStateContextProps {
  sort: string;
  type: string;
  price: string;
  option_full: boolean;
  option_rated: boolean;
  option_free: boolean;
}
const SettingsInitState = {
  sort: "0",
  type: "0",
  price: "0",
  option_full: false,
  option_rated: false,
  option_free: false
};
interface ActionType {
  type: string;
}

export const SettingsStateContext = React.createContext<
  [typeof SettingsInitState, React.Dispatch<ActionType>]
>([SettingsInitState, ({ type = "" }) => {}]);

export const SettingsStoreProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: any; // change tomorrow
  initialState: SettingsStateContextProps;
  children: JSX.Element;
}) => (
  <SettingsStateContext.Provider
    value={
      useReducer(reducer, initialState) as [
        typeof SettingsInitState,
        React.Dispatch<ActionType>
      ]
    }
    children={children}
  />
);

export const useStore = () => useContext(SettingsStateContext);
