import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import campings from "./reducers/campings/campings";

const middlewares = [thunk];

const rootReducer = combineReducers({
  campings
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
