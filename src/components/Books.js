import { useSelector, shallowEqual } from 'react-redux';
/* eslint-disable */
import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const { error, loading, items } = useSelector((state) => state.books, shallowEqual);
  const Books = items;

  if (error) {
    return (
      /* eslint-disable */
      <div>
        Error!
        {error.message}
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="books">
        {Books.map((m) => (
          <Book
            key={m.id}
            id={m.id}
            name={m.name}
            author={m.author}
            category={m.category}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <AddBook />
    </>
  );
}

export default Books;
