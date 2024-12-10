import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <p>© 2024 . All rights reserved.</p>
        <p>Follow us on social media for updates and more!</p>
      </div>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/sky009neon" target="_blank" aria-label="Twitter">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://in.linkedin.com/in/aniket716" target="_blank" aria-label="LinkedIn">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com/sky009neon" target="_blank" aria-label="Instagram">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>

      <a href="https://github.com/skyneon1" className="visit-btn" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </footer>
  );
};

export default Footer;
