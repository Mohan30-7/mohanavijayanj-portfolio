import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'MERN Bus Reservation System',
    description: 'A full-stack application for searching buses, booking seats, and management. Features a secure admin dashboard and responsive UI.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    github: 'https://github.com/Mohan30-7',
    demo: 'https://mohanavijayanj-mern-bus-reservation-system.vercel.app/'
  },
  {
    title: 'Employee Management System',
    description: 'Full-stack EMS where admins can manage employee records. Built with robust backend architecture and RESTful APIs.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'REST API', 'Hibernate'],
    github: 'https://github.com/Mohan30-7',
    demo: 'https://mohanavijayanj-ems-java-react.vercel.app/login'
  },
  {
    title: 'Supermarket Sales Analysis',
    description: 'Data analytics dashboard built during MSME internship to analyze sales trends and generate insights through interactive visualizations.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Viz'],
    github: 'https://github.com/Mohan30-7',
    demo: 'https://mohanavijayanj-supermarket-sales-analysis.streamlit.app/'
  },
  {
    title: 'MV Spark Website',
    description: 'A modern, high-performance responsive website designed to showcase company services with smooth navigation and clean UI.',
    tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Mohan30-7/MV-Spark-Welders',
    demo: 'https://mohanavijayanj-mv-spark-website.vercel.app/'
  },
  {
    title: 'CodeAlpha Frontend Tasks',
    description: 'Collection of interactive frontend applications including an Image Gallery, Calculator, and Music Player focusing on UI/UX.',
    tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/Mohan30-7',
    demo: 'https://mohanavijayanj-codealpha-tasks.vercel.app/'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            style={{ color: 'var(--muted)', fontSize: '1.1rem' }}
          >
            A showcase of my recent work in web development and data analytics.
          </motion.p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image-wrapper">
                <div className="project-image-placeholder">
                  <span>Project Thumbnail Coming Soon</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
