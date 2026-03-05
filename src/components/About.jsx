import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="section-inner">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Enthusiastic and self-motivated web developer with a strong foundation in HTML5, CSS3, JavaScript (ES6+), Bootstrap, React.js, Node.js, Express.js, and MongoDB. Completed MERN stack training and built responsive, user-focused web applications.
            </p>
            <p>
              Hands-on exposure to Python through a data science internship. Eager to contribute to real-world projects and grow as a full-stack developer.
            </p>
            <p>
              I am currently looking for an entry-level <span className="accent">Full Stack / Web Developer</span> position, and I am also very comfortable and open to <span className="accent">Java backend-friendly</span> roles.
            </p>
          </motion.div>

          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--accent-strong)' }}>Location</h3>
              <p style={{ margin: 0, color: 'var(--muted)' }}>Puducherry / Chennai</p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text)' }}>Open to relocation</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--accent-strong)' }}>Languages</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="chip chip-soft">Tamil</span>
                <span className="chip chip-soft">English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

