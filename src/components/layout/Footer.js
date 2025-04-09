import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">© {new Date().getFullYear()} 的場 陵. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;