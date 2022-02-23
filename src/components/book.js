import React from 'react';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, author, category } = props;
  return (
    <li>
      <h5>{category}</h5>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <button type="button">Remove </button>
    </li>
  );
};

export default Book;
