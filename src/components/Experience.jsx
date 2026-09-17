import { experience, education } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section experience" id="about">
      <div className="experience-layout">
        <div className="experience-copy reveal-left">
          <div className="section-label">Experience / 05</div>
          <h2>
            The arc of how I <em>got here.</em>
          </h2>
          <p>
            Hands-on engineering across SaaS, e-commerce, desktop applications,
            and responsive client products.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((row, i) => (
            <div className="job reveal" key={row.period} style={{ '--delay': `${i * 100}ms` }}>
              <p>{row.period}</p>
              <div>
                <strong>{row.role}</strong>
                <span>{row.company}</span>
                <span>{row.skills}</span>
              </div>
            </div>
          ))}
          <div className="education-heading">Education</div>
          <div className="education-list">
            {education.map((row, i) => (
              <div className="job reveal" key={row.period} style={{ '--delay': `${i * 100}ms` }}>
                <p>{row.period}</p>
                <div>
                  <strong>{row.degree}</strong>
                  <span>{row.score}</span>
                  <span>{row.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
