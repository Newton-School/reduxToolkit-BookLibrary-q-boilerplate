import React from "react";
import { connect } from "react-redux";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="book-list">
        {books.map((book, index) => (
          <li>book-title by book.author</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default connect(mapStateToProps)(BookList);
