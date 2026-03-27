import React from 'react';
import { motion } from 'framer-motion';
import { BsBriefcase, BsCalendar3, BsGeoAlt, BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'MSME, Govt. of India',
    duration: '6 Weeks',
    location: 'Pondicherry',
    description: 'Performed in-depth data analysis on supermarket sales datasets. Developed an interactive dashboard using Python and Streamlit to visualize sales trends, payment methods, and customer demographics.',
    tech: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib', 'Plotly'],
    github: 'https://github.com/Mohan30-7/Supermarket-Sales-Analysis',
    demo: 'https://mohanavijayanj-supermarket-sales-analysis.streamlit.app/',
    accentColor: '#22d3ee',
    image: '/experience/intern.png',
  },
  {
    title: 'Frontend Web Development Intern',
    company: 'CodeAlpha',
    duration: '4 Weeks',
    location: 'Remote',
    description: 'Developed interactive frontend applications as part of internship tasks, including an Image Gallery, Calculator, and Music Player. Focused on responsive and intuitive user interfaces.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/Mohan30-7/codealpha-tasks',
    demo: 'https://mohanavijayanj-codealpha-tasks.vercel.app/',
    accentColor: '#818cf8',
    image: '/experience/intern1.png',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            Work <span className="accent">Experience</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connector dot */}
              <div
                className="timeline-dot"
                style={{
                  borderColor: exp.accentColor,
                  boxShadow: `0 0 16px ${exp.accentColor}55`,
                }}
              >
                <BsBriefcase style={{ color: exp.accentColor, fontSize: '0.85rem' }} />
              </div>

              {/* Card */}
              <div
                className="timeline-card glass-card"
                style={{ borderLeft: `3px solid ${exp.accentColor}`, padding: 0, overflow: 'hidden' }}
              >
                {/* Thumbnail */}
                <div className="exp-thumbnail-wrapper">
                  <img
                    src={exp.image}
                    alt={`${exp.company} thumbnail`}
                    loading="lazy"
                    className="exp-thumbnail-img"
                  />
                  <div
                    className="exp-thumbnail-overlay"
                    style={{ background: `linear-gradient(to right, ${exp.accentColor}22, transparent)` }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem 2rem' }}>
                  {/* Header */}
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.3rem' }}>
                      {exp.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: exp.accentColor,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      flexWrap: 'wrap',
                    }}>
                      <BsBriefcase />
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--border-soft)' }}>·</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--muted)', fontWeight: 400, fontSize: '0.85rem' }}>
                        <BsCalendar3 />
                        <span>{exp.duration}</span>
                      </div>
                      <span style={{ color: 'var(--border-soft)' }}>·</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--muted)', fontWeight: 400, fontSize: '0.85rem' }}>
                        <BsGeoAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                    {exp.description}
                  </p>

                  <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
                    {exp.tech.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href={exp.demo} target="_blank" rel="noreferrer" className="btn primary-btn small-btn">
                      <BsBoxArrowUpRight /> Live Demo
                    </a>
                    <a href={exp.github} target="_blank" rel="noreferrer" className="btn ghost-btn small-btn">
                      <BsGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
