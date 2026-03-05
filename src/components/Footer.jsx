import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Mohanavijayan J. All rights reserved.
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/Mohan30-7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/mohanavijayan-j"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="mailto:mohanavijayanj@gmail.com"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

