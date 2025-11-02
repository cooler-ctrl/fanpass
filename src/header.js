import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import DropdownButton from './dropdownBtn';

function Header({ isLoggedIn, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/img/logo1.png" alt="Logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Ballina</Link></li>
            <li><Link to="/events" onClick={() => setMenuOpen(false)}>Eventet</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Rreth Nesh</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakti</Link></li>
            <li className="mobile-auth">
              <DropdownButton isLoggedIn={isLoggedIn} onLogout={onLogout} mobile={true} />
            </li>
          </ul>
        </nav>

        <div className="header-container">
          <DropdownButton isLoggedIn={isLoggedIn} onLogout={onLogout} />
        </div>
      </header>
    </>
  );
}

export default Header;
