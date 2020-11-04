import {applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import reducers from './reducers';
import RootReducer from "./reducers";

let initialState: any = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootStore = ReturnType<typeof RootReducer>
