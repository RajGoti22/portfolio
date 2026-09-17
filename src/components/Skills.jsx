import { skills } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section">
      <div className="skills">
        <div>
          <div className="section-label">What I bring / 03</div>
          <h2>A practical stack for building products end to end.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill, i) => (
            <div className="skill reveal-scale" key={skill.category} style={{ '--delay': `${i * 80}ms` }}>
              <strong>{skill.category}</strong>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
