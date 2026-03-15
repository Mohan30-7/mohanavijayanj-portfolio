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
          <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.2rem' }}>MV</span>
          <span style={{ marginLeft: '4px', fontSize: '1.1rem', fontWeight: 600 }}>Portfolio</span>
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

