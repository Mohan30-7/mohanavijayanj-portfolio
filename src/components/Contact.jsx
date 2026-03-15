import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelope, BsTelephone, BsLinkedin, BsSend } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_7hfgkwk',
        'template_6deagni',
        formRef.current,
        'e9sfouCmhBvJtjzpa'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
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

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'var(--bg-elevated)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.5rem' }}>
                  <BsEnvelope />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>Email</h4>
                  <p style={{ margin: 0, fontWeight: 600 }}>mohanavijayanj@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'var(--bg-elevated)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.5rem' }}>
                  <BsTelephone />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>Phone</h4>
                  <p style={{ margin: 0, fontWeight: 600 }}>+91 9361207221</p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-elevated)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '12px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.5rem' }}>
                  <BsLinkedin />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>LinkedIn</h4>
                  <a href="https://linkedin.com/in/mohanavijayanj" target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}>mohanavijayanj</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem', background: 'var(--bg-elevated)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <input type="text" name="user_name" placeholder="Your Name" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-soft)', borderRadius: '8px', color: 'var(--text)' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input type="email" name="user_email" placeholder="Your Email" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-soft)', borderRadius: '8px', color: 'var(--text)' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea name="message" placeholder="Your Message" required rows="5" style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-soft)', borderRadius: '8px', color: 'var(--text)', resize: 'none' }}></textarea>
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn primary-btn" style={{ width: '100%', justifyContent: 'center', gap: '0.75rem' }}>
                {status === 'sending' ? 'Sending...' : <>Send Message <BsSend /></>}
              </button>
              {status === 'success' && <p style={{ color: '#10b981', marginTop: '1rem', textAlign: 'center' }}>Message sent successfully!</p>}
              {status === 'error' && <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
