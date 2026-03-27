import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiZap } from 'react-icons/fi';

const stats = [
  { value: 3, suffix: '+', label: 'Projects Built', icon: <FiCode /> },
  { value: 2, suffix: '', label: 'Internships', icon: <FiZap /> },
  { value: 8, suffix: '+', label: 'Tech Stacks', icon: <FiDatabase /> },
];

const funFacts = [
  { emoji: '☕', text: 'Powered by Coffee' },
  { emoji: '🌙', text: 'Night Owl Coder' },
  { emoji: '🎮', text: 'Gaming on Weekends' },
  { emoji: '📚', text: 'Always Learning' },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            About <span className="accent">Me</span>
          </motion.h2>
          <div className="section-divider" style={{ margin: '1.5rem auto 0', width: '60px' }} />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Main bio card */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '2.5rem', background: 'rgba(15, 23, 42, 0.3)', marginBottom: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text)', textAlign: 'center' }}>
              Passionate Developer &amp; Problem Solver
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--muted)', marginBottom: '1.25rem' }}>
              I am a Full Stack Developer specializing in the <span style={{ color: 'var(--accent)', fontWeight: 600 }}>MERN Stack</span> and <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Spring Boot</span>. With a strong foundation in Computer Science, I focus on building scalable web applications with secure authentication, efficient REST APIs, and highly interactive user interfaces.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--muted)', marginBottom: '1.25rem' }}>
              I graduated with a <span style={{ color: 'var(--text)', fontWeight: 600 }}>B.Tech in CSE (2025)</span> from Puducherry Technological University. During my academic journey, I developed a keen interest in data analytics and visualization, utilizing Python to derive meaningful insights from complex datasets.
            </p>

          </motion.div>

          {/* Animated Stats Grid */}
          <div
            ref={ref}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card about-stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ padding: '1.5rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>
                  {inView ? (
                    <CountUp end={stat.value} duration={2} delay={i * 0.15} />
                  ) : '0'}
                  <span style={{ color: 'var(--accent)' }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.4rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Facts */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--accent-secondary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              FUN FACTS:
            </span>
            {funFacts.map(fact => (
              <motion.span
                key={fact.text}
                whileHover={{ scale: 1.08, color: 'var(--accent)' }}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-soft)',
                  fontSize: '0.85rem',
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {fact.emoji} {fact.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
