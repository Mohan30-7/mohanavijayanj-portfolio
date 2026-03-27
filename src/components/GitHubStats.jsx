import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import {
  BsGithub, BsStarFill, BsCodeSlash, BsCollectionFill,
  BsPeopleFill, BsArrowUpRightCircleFill, BsPatchCheckFill,
} from 'react-icons/bs';
import { FiGitCommit, FiGitPullRequest, FiPackage } from 'react-icons/fi';

const username = 'Mohan30-7';

/* ─── Static stat cards ─────────────────────────────────── */
const statCards = [
  { label: 'Public Repos',    value: '8+',  icon: <FiPackage />,         color: '#22d3ee' },
  { label: 'Total Projects',  value: '8+',  icon: <BsCodeSlash />,       color: '#818cf8' },
  { label: 'Internships',     value: '2',   icon: <BsCollectionFill />,  color: '#34d399' },
  { label: 'Tech Stacks',     value: '8+',  icon: <BsStarFill />,        color: '#f59e0b' },
];

/* ─── Featured repos ────────────────────────────────────── */
const pinnedRepos = [
  {
    name: 'Online-Bus-Reservation',
    desc: 'Full-stack MERN bus booking platform with JWT auth, concurrency-safe seat locking & MongoDB.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    link: 'https://github.com/Mohan30-7/mern-bus-reservation-system',
  },
  {
    name: 'Employee-Management-System',
    desc: 'Spring Boot + React EMS with RBAC, attendance tracking & real-time analytics dashboard.',
    lang: 'Java',
    langColor: '#b07219',
    link: 'https://github.com/Mohan30-7/ems-java-react',
  },
  {
    name: 'MV-Spark-Welders-Website',
    desc: 'High-conversion business site with Intersection Observer micro-animations & WhatsApp API.',
    lang: 'HTML',
    langColor: '#e34c26',
    link: 'https://github.com/Mohan30-7/mv-spark-website',
  },
  {
    name: 'Supermarket-Sales-Analysis',
    desc: 'Python + Streamlit interactive analytics dashboard for supermarket sales KPIs.',
    lang: 'Python',
    langColor: '#3572A5',
    link: 'https://github.com/Mohan30-7/Supermarket-Sales-Analysis',
  },
];

/* ─── Component ─────────────────────────────────────────── */
const GitHubStats = () => {

  return (
    <section id="github" className="section">
      <div className="section-inner">

        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}
          >
            <BsGithub style={{ fontSize: '2rem', color: 'var(--accent)' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)' }}>
              GitHub <span className="accent">Activity</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--muted)' }}
          >
            A glimpse into my coding consistency and open-source contributions.
          </motion.p>
        </div>

        {/* ── Stat Cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                borderTop: `2px solid ${stat.color}44`,
              }}
            >
              <div style={{ fontSize: '1.4rem', color: stat.color, marginBottom: '0.6rem', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: stat.color, lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.4rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Contribution Calendar ── */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ padding: '2rem', overflowX: 'auto', marginBottom: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <FiGitCommit style={{ color: 'var(--accent)', fontSize: '1.2rem' }} />
            <h3 style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>
              Contribution Calendar
            </h3>
          </div>
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            theme={{
              dark: ['#0d1117', 'rgba(34,211,238,0.2)', 'rgba(34,211,238,0.4)', 'rgba(34,211,238,0.7)', '#22d3ee'],
            }}
            fontSize={13}
            blockSize={13}
            blockMargin={5}
            style={{ maxWidth: '100%' }}
          />
        </motion.div>

        {/* ── Streak Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}
        >
          <div className="glass-card" style={{ padding: '1.5rem', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '100%' }}>
             <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.05em', alignSelf: 'flex-start' }}>
              STREAK STATS
            </span>
            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=22d3ee&fire=818cf8&currStreakLabel=22d3ee&sideLabels=c9d1d9&dates=c9d1d9`}
              alt="GitHub Streak"
              loading="lazy"
              style={{ maxWidth: '100%', borderRadius: '8px', display: 'block' }}
            />
          </div>
        </motion.div>

        {/* ── Pinned Repos ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <BsPatchCheckFill style={{ color: 'var(--accent)', fontSize: '1rem' }} />
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
              Featured Repositories
            </h3>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -5, borderColor: 'rgba(34,211,238,0.35)' }}
                style={{
                  padding: '1.4rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiPackage style={{ color: 'var(--accent)', fontSize: '1rem', flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>
                      {repo.name}
                    </span>
                  </div>
                  <BsArrowUpRightCircleFill style={{ color: 'var(--muted)', fontSize: '0.9rem', flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                  {repo.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--muted)' }}>
                    <span
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: repo.langColor, display: 'inline-block',
                      }}
                    />
                    {repo.lang}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(34,211,238,0.04)',
            borderColor: 'rgba(34,211,238,0.2)',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BsGithub style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>
                View all repositories on GitHub
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                github.com/{username}
              </div>
            </div>
          </div>
          <span className="btn primary-btn small-btn" style={{ pointerEvents: 'none' }}>
            <FiGitPullRequest /> Open GitHub
          </span>
        </motion.a>

      </div>
    </section>
  );
};

export default GitHubStats;
