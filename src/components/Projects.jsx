import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

const projects = [
  {
    title: 'MERN Bus Reservation System',
    description: 'A full-stack application for searching buses, booking seats, and management. Features a secure admin dashboard and responsive UI.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    github: 'https://github.com/Mohan30-7/mern-bus-reservation-system',
    demo: 'https://mohanavijayanj-mern-bus-reservation-system.vercel.app/',
    image: '/projects/mern-bus.png',
    category: 'Full Stack',
  },
  {
    title: 'Employee Management System',
    description: 'Full-stack EMS where admins can manage employee records. Built with robust backend architecture and RESTful APIs.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'REST API', 'Hibernate'],
    github: 'https://github.com/Mohan30-7/ems-java-react',
    demo: 'https://mohanavijayanj-ems-java-react.vercel.app/login',
    image: '/projects/ems.png',
    category: 'Full Stack',
  },
  {
    title: 'MV Spark Website',
    description: 'A modern, high-performance responsive website designed to showcase company services with smooth navigation and clean UI.',
    tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Mohan30-7/mv-spark-website',
    demo: 'https://mohanavijayanj-mv-spark-website.vercel.app/',
    image: '/projects/mv-spark.png',
    category: 'Frontend',
  },
  {
    title: 'Maruthi Rituals',
    description: 'A modern, spiritual-themed website for a Vedic priest featuring immersive 3-stage parallax scroll, English/Tamil bilingual localization, WhatsApp booking system, animated splash screen, and a premium maroon & gold UI design.',
    tech: ['React', 'Framer Motion', 'Vite', 'CSS'],
    github: 'https://github.com/Mohan30-7/maruthi-rituals',
    demo: 'https://maruthi-rituals.vercel.app/',
    image: '/projects/maruthi-rituals.png',
    category: 'Frontend',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Data Analytics'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem', textTransform: 'none' }}
          >
            Featured <span className="accent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--muted)', fontSize: '1.05rem' }}
          >
            A showcase of my recent work in web development and data analytics.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <FiFilter style={{ color: 'var(--muted)', fontSize: '1rem' }} />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.08}
                  glareColor="#22d3ee"
                  glarePosition="all"
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  transitionSpeed={1000}
                  style={{ height: '100%' }}
                >
                  <article className="project-card" style={{ height: '100%' }}>
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className="project-category-badge">{project.category}</div>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tech">
                        {project.tech.map(t => (
                          <span key={t} className="tech-badge">{t}</span>
                        ))}
                      </div>

                      <div className="card-footer">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn primary-btn small-btn full-width"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn ghost-btn small-btn full-width"
                        >
                          <FiGithub /> GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
