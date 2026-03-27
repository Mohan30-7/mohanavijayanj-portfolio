import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

import {
  SiNodedotjs, SiExpress, SiMongodb, SiSpringboot, SiPython, SiReact, SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const orbitTech = [
  { name: 'Java', icon: <FaJava />, color: '#ED8B00', angle: 0 },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', angle: 45 },
  { name: 'React.js', icon: <SiReact />, color: '#61DAFB', angle: 90 },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', angle: 135 },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', angle: 180 },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F', angle: 225 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', angle: 270 },
  { name: 'SQL', icon: <SiMysql />, color: '#4479A1', angle: 315 },
];

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="section hero-section">
      <div className="section-inner hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '1rem' }}
          >
            <span className="open-to-work-badge">
              <span className="otw-dot" />
              Open to Work
            </span>
          </motion.div>

          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Developing Scalable Web Applications
          </motion.span>

          <h1 className="hero-title">
            Hi, I'm <span className="accent">Mohanavijayan J</span>
          </h1>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1rem' }}>
            Full Stack Developer | MERN &amp; Spring Boot
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
            <a
              href="/MOHANAVIJAYAN_J_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost-btn"
              style={{ textDecoration: 'none' }}
            >
              Resume <FiDownload />
            </a>
            <button
              type="button"
              className="btn ghost-btn"
              onClick={() => handleScroll('contact')}
            >
              Contact Me
            </button>
          </div>

          {/* Typewriter effect */}
          <div className="hero-tech-typing">
            <span className="tech-label">Core Tech Stack:</span>
            <div style={{ marginTop: '0.5rem', minHeight: '2rem', display: 'flex', alignItems: 'center' }}>
              <TypeAnimation
                sequence={[
                  'MERN Stack', 2000,
                  'React.js', 2000,
                  'Node.js', 2000,
                  'Express.js', 2000,
                  'MongoDB', 2000,
                  'Spring Boot', 2000,
                  'Python', 2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                style={{
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: 'monospace',
                }}
              />
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          style={{ position: 'relative', zIndex: 20 }}
        >
          <div className="hero-avatar">
            <span className="avatar-initials">Mj</span>
          </div>
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />

          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {orbitTech.map((tech) => {
              const radius = 162;
              const x = Math.cos(tech.angle * (Math.PI / 180)) * radius;
              const y = Math.sin(tech.angle * (Math.PI / 180)) * radius;
              return (
                <motion.div
                  key={tech.name}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="glass-card"
                    style={{
                      padding: '0.4rem 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.75rem',
                      background: 'rgba(15, 23, 42, 0.85)',
                      borderColor: 'rgba(148, 163, 184, 0.4)',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span style={{ color: tech.color, display: 'flex', fontSize: '1rem' }}>{tech.icon}</span>
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>{tech.name}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
