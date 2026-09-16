import { resumeUrl, contactInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <small>Index</small>
        <a href="#work">Work</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </div>
      <div>
        <small>Connect</small>
        <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={contactInfo.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={`tel:${contactInfo.phone}`}>Phone ↗</a>
      </div>
      <div>
        <small>Based in</small>
        <p>{contactInfo.location}</p>
        <p className="copyright">
          © {contactInfo.copyrightYear} Raj Goti
          <br />
          All rights reserved
        </p>
      </div>
      <div className="footer-name-bar">
        <span className="footer-giant-name">RAJ GOTI</span>
      </div>
    </footer>
  );
}
