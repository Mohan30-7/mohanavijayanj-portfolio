import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'MERN Stack',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Python'
];

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="section-inner hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-eyebrow">Full Stack Web Developer (MERN Stack)</p>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="accent">Mohanavijayan J</span>
          </h1>
          <p className="hero-subtitle">
            I build modern, performant web applications with clean architecture and delightful user experiences. I work with React, Node.js, Express.js, and MongoDB, and I enjoy turning ideas into production-ready products.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn primary-btn"
              onClick={() => handleScroll('projects')}
            >
              View Projects
            </button>
            <button
              type="button"
              className="btn ghost-btn"
              onClick={() => {
                window.open('/MOHANAVIJAYAN_J_Resume.pdf', '_blank');
              }}
            >
              View Resume
            </button>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.9rem', marginTop: '-1rem' }}>
            Currently open to Full Stack / Web Developer roles
          </p>

          <div className="hero-tech-typing">
            <span className="tech-label">Technologies:</span>
            <div className="typing-carousel">
              {technologies.map((tech) => (
                <span key={tech} className="typing-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero-avatar">
            <span className="avatar-initials">MJ</span>
          </div>
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

