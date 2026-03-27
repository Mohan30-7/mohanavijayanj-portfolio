import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelope, BsTelephone, BsLinkedin, BsSend } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        'service_7hfgkwk',
        'template_6deagni',
        formRef.current,
        'e9sfouCmhBvJtjzpa'
      );
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 4000,
        style: {
          background: 'rgba(15, 23, 42, 0.95)',
          color: '#f3f4f6',
          border: '1px solid rgba(34, 211, 238, 0.4)',
          borderRadius: '12px',
        },
        iconTheme: { primary: '#22d3ee', secondary: '#0b1120' },
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send. Please try again or email me directly.', {
        duration: 4000,
        style: {
          background: 'rgba(15, 23, 42, 0.95)',
          color: '#f3f4f6',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: '12px',
        },
      });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <BsEnvelope />,
      label: 'Email',
      value: 'mohanavijayanj@gmail.com',
      href: 'mailto:mohanavijayanj@gmail.com',
    },
    {
      icon: <BsTelephone />,
      label: 'Phone',
      value: '+91 9361207221',
      href: 'tel:+919361207221',
    },
    {
      icon: <BsLinkedin />,
      label: 'LinkedIn',
      value: 'mohanavijayanj',
      href: 'https://linkedin.com/in/mohanavijayanj',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'Mohan30-7',
      href: 'https://github.com/Mohan30-7',
    },
  ];

  return (
    <section id="contact" className="section">
      <Toaster position="top-right" />
      <div className="section-inner">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', textTransform: 'none' }}
          >
            Get In <span className="accent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--muted)', marginTop: '0.5rem' }}
          >
            Have a project in mind? Let's talk!
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-col"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass-card contact-info-card"
                  whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                  style={{
                    padding: '1.1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'var(--bg-elevated)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{
                    width: '2.8rem',
                    height: '2.8rem',
                    borderRadius: '10px',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.15rem' }}>{item.label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: '2rem', background: 'var(--bg-elevated)' }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="contact-input"
                  style={{ resize: 'none' }}
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                className="btn primary-btn"
                style={{ width: '100%', justifyContent: 'center', gap: '0.75rem' }}
                whileTap={{ scale: 0.97 }}
              >
                {sending ? (
                  <>
                    <span className="sending-spinner" /> Sending...
                  </>
                ) : (
                  <>Send Message <BsSend /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
