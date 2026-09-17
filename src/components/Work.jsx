import { projects } from '../data/portfolioData';
import './Work.css';

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientY - rect.top)  / rect.height - 0.5) * 10;
  const y = ((e.clientX - rect.left) / rect.width  - 0.5) * -10;
  card.style.transform = `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(1.01)`;
}

function resetTilt(e) {
  e.currentTarget.style.transform = '';
}

export default function Work() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p !== featuredProject);

  return (
    <section className="section work-section" id="work">
      <div className="work-layout">
        {/* Left Sticky Column */}
        <div className="work-copy reveal-left">
          <div className="section-label">Selected Work / 01</div>
          <h2>
            Selected case studies. <em>One discipline.</em>
          </h2>
          <p>
            From AI-powered travel planning to e-commerce and SaaS tools. I turn complex requirements into clean, responsive web experiences.
          </p>
        </div>

        {/* Right Scrollable Content Column */}
        <div className="work-content">
          {/* Featured Project Card */}
          <div className="featured-wrapper reveal" style={{ '--delay': '100ms' }}>
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noreferrer"
              className="featured-card"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="featured-badge">
                <span className="dot"></span> FEATURED · CASE {featuredProject.num}
              </div>
              <div className="featured-banner">
                <div className="featured-brand">travelsensei</div>
                <h3 className="featured-banner-title">
                  AI Travel Planner Case Study
                </h3>
                <p className="featured-banner-sub">
                  Generate personalized, day-by-day itineraries instantly.
                </p>
                {featuredProject.image && (
                  <div className="featured-image-box">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                    />
                  </div>
                )}
              </div>
            </a>

            <div className="featured-info">
              <div className="featured-desc">
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.text}</p>
                <a
                  href={featuredProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="case-link"
                >
                  View live project <span className="arrow">↗</span>
                </a>
              </div>

              <div className="featured-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">YEAR</span>
                  <span className="meta-val">{featuredProject.year || '2026'}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-val">{featuredProject.role || 'FULL STACK DEVELOPER'}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">SECTOR</span>
                  <span className="meta-val">{featuredProject.sector || 'AI PRODUCT'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects List */}
          <div className="more-projects-section">
            <div className="more-projects-header reveal" style={{ '--delay': '50ms' }}>
              <span className="more-projects-title">MORE CASES</span>
              <div className="more-projects-line"></div>
            </div>

            <div className="more-projects-list">
              {otherProjects.map((project, i) => (
                <a
                  key={project.title}
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="more-project-item reveal"
                  style={{ '--delay': `${(i + 1) * 80}ms` }}
                >
                  <span className="more-num">{project.num}</span>
                  <div className="more-details">
                    <h4>{project.title}</h4>
                    <p>{project.text}</p>
                  </div>
                  <span className="more-sector">{project.sector}</span>
                  <span className="more-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

