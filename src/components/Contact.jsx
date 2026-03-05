import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
      // Surface error details in the browser console for debugging
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message:
          'Something went wrong while sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" data-aos="fade-up">
      <div className="section-inner">
        <div className="section-header">
          <h2>Let&apos;s Connect</h2>
          <p>Get in touch.</p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="glass-card contact-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="card-title" style={{ color: 'var(--accent-strong)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            <p className="card-body" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              Have an opportunity, collaboration, or question? I&apos;d love to hear from you.
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-strong)' }}>
                  <i className="fa-solid fa-phone" />
                </div>
                <span style={{ color: 'var(--text)', fontWeight: 500 }}>+91-9361207221</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-strong)' }}>
                  <i className="fa-solid fa-envelope" />
                </div>
                <a href="mailto:mohanavijayanj@gmail.com" style={{ color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>mohanavijayanj@gmail.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-strong)' }}>
                  <i className="fa-brands fa-linkedin" />
                </div>
                <a href="https://linkedin.com/in/mohanavijayan-j" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>linkedin.com/in/mohanavijayan-j</a>
              </div>

            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="btn primary-btn full-width"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p
                className={`form-status ${status.type === 'success' ? 'success' : 'error'
                  }`}
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

