import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-name" aria-hidden="true">
        Raj
      </div>
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow">Software Engineer</div>
        <h1>Building interfaces that make complex work feel simple.</h1>
        <p>
          Results-driven developer from Surat, India, specializing in React.js, Next.js, TypeScript, and JavaScript. I build scalable, responsive applications with a focus on performance and user experience.
        </p>
      </div>
      <a className="edition" href="#contact">
        Let's talk <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
