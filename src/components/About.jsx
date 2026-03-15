import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            About <span className="accent">Me</span>
          </motion.h2>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-elevated)' }}>
              <span style={{ fontSize: '5rem' }}>👨‍💻</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
              Passionate Developer & Problem Solver
            </h3>
            <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--muted)' }}>
              I am a **Full Stack Developer** specializing in the **MERN Stack** and **Spring Boot**. With a strong foundation in Computer Science, I focus on building scalable web applications with secure authentication, efficient REST APIs, and highly interactive user interfaces.
            </p>
            <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--muted)' }}>
              I graduated with a **B.Tech in Computer Science and Engineering in 2025**. During my academic journey, I've developed a keen interest in data analytics and visualization, utilizing Python to derive meaningful insights from complex datasets.
            </p>
            <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--muted)' }}>
                Recent experience includes a **6-week internship at MSME**, where I developed a Sales Analysis Dashboard for a Supermarket using Python and Streamlit, showcasing my ability to bridge the gap between backend logic and data-driven decision making.
            </p>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                <div>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>Education</h4>
                    <p style={{ fontSize: '0.9rem' }}>B.Tech CSE, 2025</p>
                </div>
                <div>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>Specialization</h4>
                    <p style={{ fontSize: '0.9rem' }}>Full Stack Development</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
