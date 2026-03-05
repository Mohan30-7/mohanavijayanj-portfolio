import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Online Bus Reservation System',
    description: 'Full-stack MERN course project for booking bus tickets.',
    bullets: [
      'Responsive and user-friendly bus reservation interface using HTML5, CSS3, and Bootstrap.',
      'Interactive features: seat selection, form validation, and booking flow using JavaScript (ES6+).',
      'Modular UI components built with React.js for better organization and reusability.',
      'RESTful backend with Node.js and Express.js.',
      'MongoDB integration for bookings and user data with focus on clean UI and smooth UX.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Mohan30-7',
    demo: '#'
  },
  {
    title: 'Blood Bank Management System',
    description: 'Academic database project to manage donors, recipients, and blood inventory.',
    bullets: [
      'Designed relational schema for donors, recipients, and inventory.',
      'Implemented CRUD operations and basic SQL queries.',
      'Implemented blood group matching using simple SQL conditions.',
      'Ensured data consistency using primary keys and constraints.'
    ],
    tech: ['MySQL', 'SQL', 'Database Design'],
    github: 'https://github.com/Mohan30-7',
    demo: null
  }
];

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 }
  })
};

const Projects = () => {
  return (
    <section id="projects" className="section" data-aos="fade-up">
      <div className="section-inner">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Selected work and case studies.</p>
        </div>
        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={projectVariants}
              style={{ padding: '2rem' }}
            >
              <div>
                <h3 className="card-title" style={{ fontSize: '1.25rem', color: 'var(--accent-strong)', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p className="card-body" style={{ color: 'var(--text)', marginBottom: '1rem', fontWeight: 500 }}>{project.description}</p>
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="chip chip-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost-btn small-btn"
                >
                  <i className="fa-brands fa-github" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

