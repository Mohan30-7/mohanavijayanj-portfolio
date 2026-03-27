import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiReact, SiVite, SiFramer } from 'react-icons/si';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/Mohan30-7', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/mohanavijayanj', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:mohanavijayanj@gmail.com', label: 'Email' },
];

const builtWith = [
  { icon: <SiReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
  { icon: <SiFramer />, name: 'Framer Motion', color: '#BB86FC' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner-full">
        {/* Top Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-name" style={{ fontSize: '2rem' }}>Mj</span>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.5rem', maxWidth: '260px', lineHeight: 1.6 }}>
              Full Stack Developer building scalable web apps with clean architecture and great UX.
            </p>
          </div>

          <div className="footer-social">
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Connect</p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="footer-social-icon"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.15) 30%, rgba(34,211,238,0.2) 50%, rgba(148,163,184,0.15) 70%, transparent)',
          margin: '1.5rem 0',
        }} />

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--text)' }}>Mohanavijayan J</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
            <span>Built with</span>
            {builtWith.map(item => (
              <span
                key={item.name}
                title={item.name}
                style={{ color: item.color, fontSize: '1rem', display: 'flex', alignItems: 'center' }}
              >
                {item.icon}
              </span>
            ))}
            <span>& ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
