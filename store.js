import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import booksReducer from "./features/booksSlice";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {},
  middleware,
});

export default store;
