import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_7hfgkwk',
        'template_6deagni',
        formRef.current,
        'e9sfouCmhBvJtjzpa'
      );

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully!'
      });
      formRef.current?.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message:
          'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
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
        </div>

        <div className="contact-grid">
          <motion.div
            className="glass-card contact-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: 'var(--bg-elevated)', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Contact Information</h3>
            <p className="card-body" style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.2rem' }}>
                  <FiPhone />
                </div>
                <div>
                   <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>Phone</p>
                   <span style={{ color: 'var(--text)', fontWeight: 600 }}>+91-9361207221</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.2rem' }}>
                  <FiMail />
                </div>
                <div>
                   <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>Email</p>
                   <a href="mailto:mohanavijayanj@gmail.com" style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}>mohanavijayanj@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.2rem' }}>
                  <FiLinkedin />
                </div>
                <div>
                   <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>LinkedIn</p>
                   <a href="https://linkedin.com/in/mohanavijayan-j" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}>mohanavijayan-j</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'var(--bg-elevated)', padding: '2rem' }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn primary-btn full-width"
              disabled={isSubmitting}
              style={{ padding: '1rem', marginTop: '1rem' }}
            >
              {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FiSend style={{ marginLeft: '0.5rem' }} />
                  </>
              )}
            </button>
            {status.message && (
              <p
                className={`form-status ${status.type === 'success' ? 'success' : 'error'
                  }`}
                style={{ marginTop: '1rem', textAlign: 'center' }}
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
