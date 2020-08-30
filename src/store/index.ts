import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as reducers from "./createSlices";

const store = configureStore({
  reducer: combineReducers(reducers)
});

export type AppDispatch = typeof store.dispatch;

export default store;