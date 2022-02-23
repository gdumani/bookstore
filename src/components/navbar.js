import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const NavBar = () => (
  <div className="nav">
    <h1>Book Store</h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </div>
);
export default NavBar;
