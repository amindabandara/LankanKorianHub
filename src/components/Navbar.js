import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../log/Lankan_Korean_Hub_Logo.png'; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Lankan Korean Hub Logo" className="logo" />
      </div>
      <h1>Lankan Korean Hub</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


