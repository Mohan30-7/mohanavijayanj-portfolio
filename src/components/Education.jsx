import React from 'react';
import { motion } from 'framer-motion';

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
        <section id="education" className="section" data-aos="fade-up">
            <div className="section-inner">
                <div className="section-header">
                    <h2>Education</h2>
                    <p>My academic background.</p>
                </div>
                <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
                    {educationList.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{ display: 'flex', flexDirection: 'column', padding: '1.8rem' }}
                        >
                            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-strong)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{edu.degree}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 500, margin: '0 0 0.8rem' }}>{edu.institution}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
                                <span style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>{edu.duration}</span>
                                <span className="chip chip-soft" style={{ fontWeight: 600, color: 'var(--accent)' }}>{edu.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
