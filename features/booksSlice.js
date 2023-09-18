import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: () => {},
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
