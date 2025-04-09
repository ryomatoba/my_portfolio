// Header.js の例
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="name">的場 陵</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;