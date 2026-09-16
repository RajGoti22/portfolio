import './Intro.css';

export default function Intro() {
  return (
    <section className="section">
      <div className="intro">
        <div className="section-label">The work / 01</div>
        <div>
          <h2>
            Selected projects. <em>Built to ship.</em>
          </h2>
          <div className="intro-copy">
            <p>
              I build web products where the wrong decision costs users{' '}
              <strong>money, trust, or momentum.</strong>
            </p>
            <p>
              From AI-powered travel planning to e-commerce and SaaS tools, I turn
              business requirements into clean, reusable interfaces that perform.
            </p>
            <p>
              The best engineering is thoughtful, maintainable, and invisible to the
              person using it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
