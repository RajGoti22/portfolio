import { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <div className="section-label">Contact / 06</div>
          <h2 className="contact-heading">
            <span className="c-line c-line-1">Have an opportunity?</span>
            <span className="c-line c-line-2">Project in mind?</span>
            <span className="c-line c-line-3">Have a role for me?</span>
          </h2>
          <p className="contact-subtitle">
            Every great product starts with a conversation.{' '}
            <em>Let&apos;s begin there.</em>
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-email-cta">
            <span className="contact-mono-label">EMAIL</span>
            <div className="contact-email-row">
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-email-link"
              >
                {contactInfo.email}
              </a>
              <button
                onClick={handleCopy}
                className="contact-copy-btn"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copied ? (
                  <span className="contact-copied">Copied!</span>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-secondary">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-talk-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {"Let's Talk"}
              <span className="contact-arrow">→</span>
            </a>

            <div className="contact-phone-row">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
          </div>

          <div className="contact-elsewhere">
            <span className="contact-mono-label">Elsewhere</span>
            <div className="contact-elsewhere-links">
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
