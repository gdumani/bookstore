/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Booklist = () => {
  const books = useSelector((state) => state.booksReducer);
  console.log(books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book {...book} />
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
