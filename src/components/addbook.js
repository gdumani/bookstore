import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const tempCats = ['Action', 'Science Fiction', 'Economy', 'Other'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Category');
  const currentBooks = useSelector((state) => state.booksReducer);
  const nextId = currentBooks[currentBooks.length - 1].id + 1;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const newBook = { id: nextId, title, category };
    if (title !== '' && category !== 'Category') {
      dispatch(addBook(newBook));
    }
    setTitle('');
    setCategory('Category');
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <select
          id="category"
          name="category"
          defaultValue={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value={category} disabled>Category</option>
          {tempCats.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
