import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';
import Categories from './redux/categories/categories';
import Books from './redux/books/books';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
