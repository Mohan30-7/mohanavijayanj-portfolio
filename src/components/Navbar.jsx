import React from 'react';

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
          <span className="logo-mark">{'<'}</span>
          <span className="logo-text">Mohanavijayan</span>
          <span className="logo-mark">{'/>'}</span>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className="nav-link"
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

