import { useState, useEffect } from 'react';
import { resumeUrl } from '../data/portfolioData';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile nav when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && open) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${open ? 'nav-is-open' : ''}`}>
      <div className="header-container">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          RAJ GOTI
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="#work">Work</a>
          <a href="#about-me">About me</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="resume-btn-desktop"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="resume-dot" /> Resume ↗
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>

        {/* Mobile Drawer */}
        <div className={`nav-mobile-drawer ${open ? 'open' : ''}`}>
          <nav className="nav-mobile-links">
            <a href="#work" onClick={() => setOpen(false)}>
              <span>01</span> Work
            </a>
            <a href="#about-me" onClick={() => setOpen(false)}>
              <span>02</span> About me
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              <span>03</span> Contact
            </a>
          </nav>
          <div className="nav-mobile-footer">
            <a
              className="resume-btn-mobile"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Download Resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
