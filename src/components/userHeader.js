import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/images/loginLogo.png';
import UserImg from '../assests/images/loginLogo.png';

import '../assests/css/home.css';
import '../assests/css/headder.css';
import '../assests/css/style.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="topHeadder position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img className="img-fluid logoWebHead" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle d-md-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Navigation */}
          <nav className={`headerMenu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
