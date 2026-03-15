import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            About <span className="accent">Me</span>
          </motion.h2>
          <div className="section-divider" style={{ margin: '1.5rem auto 0', width: '60px' }} />
        </div>

        <div className="about-content-centered" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left', background: 'rgba(15, 23, 42, 0.3)' }}>
              <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                I am a Full Stack Developer specializing in the MERN Stack and Spring Boot. With a strong foundation in Computer Science, I focus on building scalable web applications with secure authentication, efficient REST APIs, and highly interactive user interfaces.
              </p>
              <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                I graduated with a B.Tech in Computer Science and Engineering in 2025. During my academic journey, I've developed a keen interest in data analytics and visualization, utilizing Python to derive meaningful insights from complex datasets.
              </p>
              <p className="card-body" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                  Recent experience includes a 6-week internship at MSME, where I developed a Sales Analysis Dashboard for a Supermarket using Python and Streamlit, showcasing my ability to bridge the gap between backend logic and data-driven decision making.
              </p>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                      <h4 style={{ color: 'var(--accent)', marginBottom: '0.25rem', fontSize: '1rem' }}>Education</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>B.Tech CSE, 2025</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <h4 style={{ color: 'var(--accent)', marginBottom: '0.25rem', fontSize: '1rem' }}>Specialization</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Full Stack Development</p>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
