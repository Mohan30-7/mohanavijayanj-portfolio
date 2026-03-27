import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { BsStars, BsPatchCheckFill } from 'react-icons/bs';
import { SiJavascript, SiReact, SiPython, SiSpringboot, SiSpring } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const certifications = [
  {
    title: 'Data Science Internship',
    issuer: 'Ministry of MSME, India',
    subtitle: 'Govt. of India – Ministry of Micro, Small and Medium Enterprises',
    date: 'Jan – Mar 2025',
    icon: <SiPython />,
    iconColor: '#22d3ee',
    badgeColor: 'rgba(34,211,238,0.12)',
    borderAccent: 'rgba(34,211,238,0.3)',
    tags: ['Python', 'Pandas', 'Streamlit', 'Data Analytics', 'Plotly'],
    certificateLink: 'https://drive.google.com/file/d/1qZpuzcH2pL-9p64HcqUIA046U4hjRfXy/view?usp=drivesdk',
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Top Skilled Academy',
    subtitle: 'Full Stack Web Development – MERN Stack Specialization',
    date: 'Jun 2025 – Dec 2025',
    icon: <SiReact />,
    iconColor: '#61DAFB',
    badgeColor: 'rgba(97,218,251,0.1)',
    borderAccent: 'rgba(97,218,251,0.3)',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full Stack'],
    certificateLink: 'https://drive.google.com/file/d/1CZb_U2e1dg_X2_nu9awuYY4_30qDhiB5/view?usp=drivesdk',
  },
  {
    title: 'Code Alpha Certification',
    issuer: 'CodeAlpha',
    subtitle: 'Frontend Web Development – Virtual Internship Program',
    date: 'Dec 2025 – Jan 2026',
    icon: <SiJavascript />,
    iconColor: '#818cf8',
    badgeColor: 'rgba(129,140,248,0.1)',
    borderAccent: 'rgba(129,140,248,0.3)',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'ES6+'],
    certificateLink: 'https://drive.google.com/file/d/1ItQQ3Fp6VirqQPGtzWRAkgQFP9BdXUEH/view?usp=drivesdk',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            Certifications &amp; <span className="accent">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--muted)', marginTop: '0.5rem' }}
          >
            Recognized by government bodies, professional academies, and industry programs.
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                padding: '1.75rem',
                borderLeft: `3px solid ${cert.borderAccent}`,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    background: cert.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: cert.iconColor,
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>
                <BsPatchCheckFill style={{ color: cert.iconColor, fontSize: '1.2rem', opacity: 0.85 }} />
              </div>

              {/* Title + subtitle */}
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text)' }}>
                {cert.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                <FiAward style={{ color: cert.iconColor, fontSize: '0.82rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', color: cert.iconColor, fontWeight: 600 }}>{cert.issuer}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                {cert.subtitle}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.7, marginBottom: '1rem' }}>
                📅 {cert.date}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {cert.tags.map(tag => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>

              {/* View Certificate Button */}
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '8px',
                  background: cert.badgeColor,
                  border: `1px solid ${cert.borderAccent}`,
                  color: cert.iconColor,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = cert.borderAccent;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = cert.badgeColor;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FiExternalLink style={{ fontSize: '0.9rem' }} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning banner */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '2rem',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            background: 'rgba(34,211,238,0.04)',
            borderColor: 'rgba(34,211,238,0.2)',
          }}
        >
          <BsStars style={{ color: 'var(--accent)', fontSize: '1.3rem', flexShrink: 0 }} />
          <span style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.95rem' }}>Currently Learning:</span>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Spring Boot', icon: <SiSpringboot /> },
              { name: 'Spring Security', icon: <SiSpring /> },
              { name: 'Java', icon: <FaJava /> }
            ].map(item => (
              <span key={item.name} className="currently-learning-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '1rem', display: 'flex' }}>{item.icon}</span> {item.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
