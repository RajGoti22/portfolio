import { useState } from 'react';
import { faqItems } from '../data/portfolioData';
import './FAQ.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="section">
      <div className="faq">
        <div>
          <div className="section-label">FAQ / 04</div>
          <h2>The questions people ask most often.</h2>
        </div>
        <div className="questions">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.question}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-row"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-num">Q.{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-toggle">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <p className="faq-answer">{item.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
