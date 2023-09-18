import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/booksSlice";

const store = configureStore({
  reducer: {},
});

export default store;
