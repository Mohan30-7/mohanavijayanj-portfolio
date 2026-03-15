import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            Work <span className="accent">Experience</span>
          </motion.h2>
        </div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'var(--bg-elevated)', padding: '2rem' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-soft)', paddingBottom: '1.5rem' }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Data Science Intern</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 600 }}>
                    <FiBriefcase /> <span>MSME, Govt. of India</span>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', justifyContent: 'flex-end', marginBottom: '0.25rem' }}>
                    <FiCalendar /> <span>Feb 2025 – Mar 2025</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', justifyContent: 'flex-end' }}>
                    <FiMapPin /> <span>Puducherry, India</span>
                </div>
            </div>
          </div>

          <ul className="experience-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
                'Cleaned and processed 10,000+ sales records using Python and Pandas.',
                'Performed exploratory data analysis to identify customer trends and seasonal patterns.',
                'Built interactive dashboards using Streamlit for data visualization.',
                'Presented insights that supported data-driven business decisions for small enterprises.'
            ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent)', marginTop: '0.25rem' }}>•</span>
                    {item}
                </li>
            ))}
          </ul>

          <div className="project-tech">
            {['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib', 'Plotly'].map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
