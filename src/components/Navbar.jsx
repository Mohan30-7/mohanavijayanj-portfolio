import React, { useState, useEffect } from 'react';
import MJLogo from './MJLogo';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education', target: 'education' },
  { label: 'Contact', target: 'contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px', // Adjusted to trigger when section is at the top
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select all sections that have an ID matching our navItems
    navItems.forEach((item) => {
      const element = document.getElementById(item.target);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleScroll = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={() => handleScroll('home')}>
          <MJLogo size={32} />
          <span style={{ marginLeft: '10px', fontSize: '1.1rem', fontWeight: 600 }}>Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              onClick={() => handleScroll(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger Button (mobile only) */}
        <button
          type="button"
          className="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className={`mobile-nav-link ${activeSection === item.target ? 'active' : ''}`}
              onClick={() => handleScroll(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
