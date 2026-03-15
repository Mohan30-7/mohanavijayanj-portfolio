import React from 'react';
import { motion } from 'framer-motion';
import { BsBriefcase, BsCalendar3, BsGeoAlt } from 'react-icons/bs';

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

                <div className="experience-container">
                    <motion.div 
                        className="glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '2rem', background: 'var(--bg-elevated)', borderLeft: '4px solid var(--accent)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Data Science Intern</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 600 }}>
                            <BsBriefcase /> <span>MSME, Govt. of India</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            <BsCalendar3 /> <span>6 Weeks (Internship)</span>
                            <span style={{ margin: '0 0.5rem' }}>•</span>
                            <BsGeoAlt /> <span>Remote / Chennai</span>
                        </div>
                        
                        <p style={{ marginTop: '1.5rem', lineHeight: 1.7, color: 'var(--text-soft)' }}>
                            Performed in-depth data analysis on supermarket sales datasets. Developed an interactive dashboard using Python and Streamlit to visualize sales trends, payment methods, and customer demographics, providing actionable insights for business optimization.
                        </p>

                        <div className="project-tech" style={{ marginTop: '1.5rem' }}>
                            {['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib', 'Plotly'].map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
