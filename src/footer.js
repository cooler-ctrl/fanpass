import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2025 FanPass. All Rights Reserved.</p>
        <img src="/img/logo1.png" alt="FanPass Logo" />
      </div>
      <div className="footer-right">
        <p>Instagram &nbsp;&nbsp; Facebook &nbsp;&nbsp; Twitter</p>
        <p>fanpass@email.com</p>
        <p>+38344728349</p>
        <p>rr. Adem Jashari, Gjilan, Kosovo</p>
        <p>Postal code: 6000</p>
      </div>
    </footer>
  );
};

export default Footer;
