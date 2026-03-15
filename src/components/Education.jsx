import React from 'react';
import { motion } from 'framer-motion';
import { FiGraduationCap, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const educationList = [
    {
        degree: 'B.Tech – Computer Science and Engineering',
        institution: 'Puducherry Technological University',
        duration: '2021–2025',
        score: 'CGPA: 7.85'
    },
    {
        degree: 'HSC – Tamil Nadu State Board',
        institution: 'Petit Seminaire Higher Secondary School',
        duration: '2020–2021',
        score: '87.8%'
    },
    {
        degree: 'SSLC – Tamil Nadu State Board',
        institution: 'Petit Seminaire Higher Secondary School',
        duration: '2018–2019',
        score: '86.4%'
    }
];

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="section-inner">
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
                    >
                        Academic <span className="accent">Background</span>
                    </motion.h2>
                </div>

                <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {educationList.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', background: 'var(--bg-elevated)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.2rem' }}>
                                <FiGraduationCap />
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: 0, lineHeight: 1.4 }}>{edu.degree}</h3>
                            </div>
                            
                            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '1.5rem', flex: 1 }}>{edu.institution}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-soft)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontSize: '0.85rem' }}>
                                    <FiCalendar /> <span>{edu.duration}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                                    <FiCheckCircle /> <span>{edu.score}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
