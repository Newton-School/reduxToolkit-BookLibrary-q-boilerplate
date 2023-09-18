import React from "react";
import { useSelector } from "react-redux";

const BookList = () => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="book-list">
        {/* {books.map(() => (
          <li>
            book-title by book-author
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default BookList;
