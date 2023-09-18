import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {};

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit" className="submit-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
