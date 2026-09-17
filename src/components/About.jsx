import { useState, useEffect } from 'react';
import { resumeUrl } from '../data/portfolioData';
import './About.css';

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
      setTime(new Intl.DateTimeFormat('en-IN', opts).format(now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time} IST</span>;
}

export default function About() {
  return (
    <section className="section about-section" id="about-me">
      <div className="about-layout">

        {/* Left sidebar */}
        <div className="about-sidebar reveal-left">
          <div className="section-label">About / 02</div>
          <h2 className="about-heading">
            Who I<br />
            <em>actually</em> am.
          </h2>

          <div className="about-meta">
            <div className="about-meta-item">
              <span className="about-meta-label">Based in</span>
              <span className="about-meta-value">
                <span className="flag">IN</span> Surat, India
              </span>
            </div>

            <div className="about-meta-item">
              <span className="about-meta-label">Local time</span>
              <span className="about-meta-value about-time">
                <span className="time-dot" />
                <LiveClock />
              </span>
            </div>

            <div className="about-meta-item">
              <span className="about-meta-label">Status</span>
              <span className="about-meta-value about-status">
                <span className="status-dot" />
                Open to roles
              </span>
            </div>

            <div className="about-meta-item">
              <span className="about-meta-label">Degree</span>
              <span className="about-meta-value">B.Tech IT · 9.64</span>
            </div>
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="about-resume-link"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Download Resume ↗
          </a>
        </div>

        {/* Right bio */}
        <div className="about-body">
          <p className="about-para about-para--lead reveal" style={{ '--delay': '80ms' }}>
            I started in design, then learned to ship. That sequence matters
            — it means I think about the user before writing code, knowing when{" "}
            <em>a better interaction solves more than a better algorithm.</em>
          </p>

          <p className="about-para reveal" style={{ '--delay': '160ms' }}>
            Four years of B.Tech in IT gave me the core fundamentals, while internships
            at Pixer Digital and Webito Infotech provided real production experience.
            I've shipped AI travel planners, e-commerce platforms, and desktop SaaS
            modules using React, TypeScript, MobX, and SQL.
          </p>

          <p className="about-para about-para--muted reveal" style={{ '--delay': '240ms' }}>
            I am looking for a full-time role where the codebase is treated like a product,
            feedback loops are short, and teams focus on building great user experiences.
          </p>
        </div>

      </div>
    </section>
  );
}
