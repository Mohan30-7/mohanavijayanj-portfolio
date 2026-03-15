import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const technologies = [
  'MERN Stack',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Spring Boot',
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Developing Scalable Web Solutions
          </motion.span>
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Mohanavijayan J</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1rem' }}>
            Full Stack Developer | MERN & Spring Boot
          </h2>
          <p className="hero-subtitle">
            I build modern, performant web applications with clean architecture and delightful user experiences. Specializing in MERN stack and Spring Boot, I turn complex problems into elegant, scalable solutions.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn primary-btn"
              onClick={() => handleScroll('projects')}
            >
              View Projects <FiArrowRight />
            </button>
            <button
              type="button"
              className="btn ghost-btn"
              onClick={() => {
                window.open('/MOHANAVIJAYAN_J_Resume.pdf', '_blank');
              }}
            >
              Resume <FiDownload />
            </button>
            <button
              type="button"
              className="btn ghost-btn"
              onClick={() => handleScroll('contact')}
            >
              Contact Me
            </button>
          </div>

          <div className="hero-tech-typing">
            <span className="tech-label">Core Tech Stack:</span>
            <div className="typing-carousel" style={{ height: '2rem', marginTop: '0.5rem' }}>
              {technologies.map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="typing-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [10, 0, 0, -10]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 4,
                    times: [0, 0.1, 0.9, 1]
                  }}
                  style={{ 
                    position: 'absolute', 
                    color: 'var(--accent)', 
                    fontWeight: 600,
                    fontSize: '1.2rem'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="hero-avatar">
            <span className="avatar-initials">MJ</span>
          </div>
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />
          
          {/* Decorative floating elements */}
          <motion.div 
            style={{ 
                position: 'absolute', 
                top: '10%', 
                right: '10%', 
                padding: '0.5rem 1rem', 
                background: 'var(--bg-elevated)', 
                borderRadius: '12px', 
                border: '1px solid var(--border-soft)',
                fontSize: '0.8rem',
                zIndex: 5
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀 React Expert
          </motion.div>
          <motion.div 
            style={{ 
                position: 'absolute', 
                bottom: '15%', 
                left: '-5%', 
                padding: '0.5rem 1rem', 
                background: 'var(--bg-elevated)', 
                borderRadius: '12px', 
                border: '1px solid var(--border-soft)',
                fontSize: '0.8rem',
                zIndex: 5
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            ⚡ Node.js Master
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
