import { useState } from 'react';
import { resumeUrl } from '../data/portfolioData';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="logo" href="#top">
        RAJ GOTI
      </a>
      <button
        className="menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        <a href="#work" onClick={() => setOpen(false)}>
          Work
        </a>
        <a href="#about-me" onClick={() => setOpen(false)}>
          About me
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
        <a
          className="resume"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          ▣ &nbsp; Resume
        </a>
      </nav>
    </header>
  );
}
