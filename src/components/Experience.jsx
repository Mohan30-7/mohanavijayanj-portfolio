import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section" data-aos="fade-up">
      <div className="section-inner">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Where I have applied my skills.</p>
        </div>
        <motion.div
          className="glass-card experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-header" style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-strong)' }}>Data Science Intern</h3>
            <span className="experience-company" style={{ fontSize: '1rem' }}>Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, Puducherry</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>Feb 2025 – Mar 2025</span>
          </div>
          <ul className="experience-list" style={{ gap: '0.8rem', marginBottom: '1.5rem' }}>
            <li>Cleaned and processed 10,000+ sales records using Python and Pandas.</li>
            <li>Performed exploratory data analysis to identify customer trends and seasonal patterns.</li>
            <li>Built interactive dashboards using Streamlit for data visualization.</li>
            <li>Presented insights that supported data-driven business decisions.</li>
          </ul>
          <div className="project-tech" style={{ marginTop: '1rem' }}>
            {['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib', 'Seaborn'].map((tech) => (
              <span key={tech} className="chip chip-soft">
                {tech}
              </span>
            ))}
          </div>
          <div className="card-footer" style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
            <a
              href="https://github.com/Mohan30-7"
              target="_blank"
              rel="noreferrer"
              className="btn ghost-btn small-btn"
            >
              <i className="fa-brands fa-github" />
              <span>View on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

