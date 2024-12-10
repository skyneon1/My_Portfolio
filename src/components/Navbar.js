import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import resume from '../assets/Aniket-Resume.pdf';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div>
      <div className='nav-main'>
        <nav className={`navigation ${isVisible ? '' : 'hidden'}`}>
         
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={isMenuOpen ? 'show' : ''}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className={`top-right-navbar ${isVisible ? '' : 'hidden'}`}>
        <a
          href="https://www.canva.com/design/DAGXgYGFV_s/KlnLEQKGWAewph869lCkQg/view?utm_content=DAGXgYGFV_s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb292ac3614"
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn"
        >
          Visit CV
        </a>
        <a
          href="https://github.com/skyneon1"
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn"
        >
          Github
        </a>

        <a href={resume} download className="cv-btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;
