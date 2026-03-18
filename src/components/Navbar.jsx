import React, { useState, useEffect } from 'react';

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
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={() => handleScroll('home')}>
          <span className="logo-name">mohanavijayan</span>
          <span style={{ marginLeft: '6px', fontSize: '1.1rem', fontWeight: 600 }}>Portfolio</span>
        </div>
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
      </div>
    </header>
  );
};

export default Navbar;

