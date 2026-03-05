import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'React.js'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Express.js'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL (basic exposure)'] },
  { category: 'Core Java', items: ['OOP Concepts', 'Collections Framework', 'Multithreading', 'Exception Handling', 'File I/O'] },
  { category: 'Programming', items: ['Python (3.x) – basic exposure'] },
  { category: 'Tools & Others', items: ['Git', 'GitHub'] }
];

const Skills = () => {
  return (
    <section id="skills" className="section" data-aos="fade-up">
      <div className="section-inner">
        <div className="section-header">
          <h2>Tech Stack</h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <div className="skill-chips" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {skills.map((group) => (
              <motion.div
                key={group.category}
                className="skill-group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(148, 163, 184, 0.1)'
                }}
              >
                <p className="skill-group-title" style={{ color: 'var(--accent-strong)' }}>{group.category}</p>
                <div className="skill-group-chips">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      className="chip"
                      whileHover={{
                        boxShadow: '0 0 8px rgba(56, 189, 248, 0.5)',
                        borderColor: 'rgba(56, 189, 248, 0.8)'
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ padding: '1.2rem 1.8rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>Soft Skills:</span>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span className="chip chip-soft">Teamwork</span>
            <span className="chip chip-soft">Problem Solving</span>
            <span className="chip chip-soft">Adaptability</span>
            <span className="chip chip-soft">Communication</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

