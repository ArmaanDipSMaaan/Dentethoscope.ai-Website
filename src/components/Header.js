import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Dental AI</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="ai-integration" smooth={true} duration={500}>
              AI Integration
            </Link>
          </li>
          <li>
            <Link to="case-studies" smooth={true} duration={500}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
