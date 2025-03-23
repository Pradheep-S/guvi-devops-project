import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after navigation
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h2 className="logo">Bata  Shoes</h2>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          {[
            { to: '/', text: 'Home', exact: true },
            { to: '/products', text: 'Products' },
            { to: '/about', text: 'About' },
            { to: '/contact', text: 'Contact' },
          ].map((link, index) => (
            <li key={link.text} style={{ '--i': index }}>
              <NavLink
                to={link.to}
                className="nav-item"
                activeClassName="active"
                exact={link.exact}
                onClick={closeMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;