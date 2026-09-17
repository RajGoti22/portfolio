import useParallax from '../hooks/useParallax';
import './Hero.css';

export default function Hero() {
  const nameRef = useParallax(0.22);

  return (
    <section className="hero">
      <div className="hero-name hero-anim-name" ref={nameRef} aria-hidden="true">
        Raj
      </div>
      <div className="hero-image hero-anim-photo" aria-hidden="true" />
      <div className="hero-copy hero-anim-copy">
        <div className="eyebrow hero-anim-eyebrow">Software Engineer</div>
        <h1 className="hero-anim-h1">Building interfaces that make complex work feel simple.</h1>
        <p className="hero-anim-p">
          Results-driven developer from Surat, India, specializing in React.js, Next.js, TypeScript, and JavaScript. I build scalable, responsive applications with a focus on performance and user experience.
        </p>
      </div>
      <a className="edition hero-anim-edition" href="#contact">
        Let's talk <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
