import React from 'react';
import { motion } from 'framer-motion';
import { 
    SiReact, SiNodedotjs, SiExpress, SiMongodb, 
    SiSpringboot, SiPython, SiPandas, SiJavascript, 
    SiHtml5, SiCss3, SiMysql, SiGit, SiGithub,
    SiTypescript, SiBootstrap, SiTailwindcss, SiPlotly
} from 'react-icons/si';

const skillGroups = [
  { 
    category: 'Frontend', 
    skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
    ] 
  },
  { 
    category: 'Backend', 
    skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'REST APIs', icon: null },
    ] 
  },
  { 
    category: 'Database', 
    skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
    ] 
  },
  { 
    category: 'Data Analytics', 
    skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'Plotly', icon: <SiPlotly /> },
        { name: 'Streamlit', icon: null },
    ] 
  },
  { 
    category: 'Tools', 
    skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Vite', icon: null },
    ] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            My <span className="accent">Skills</span>
          </motion.h2>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              style={{ padding: '1.5rem', background: 'var(--bg-elevated)' }}
            >
              <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-badge"
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'var(--accent-soft)',
                        borderColor: 'var(--accent)'
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-soft)',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ color: 'var(--accent)', display: 'flex' }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '2.5rem', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <span style={{ fontWeight: 600, color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>Soft Skills:</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Communication', 'Adaptability'].map(skill => (
                <span key={skill} style={{ padding: '0.4rem 1rem', borderRadius: '20px', background: 'var(--bg-elevated)', border: '1px solid var(--border-soft)', fontSize: '0.9rem' }}>
                    {skill}
                </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
