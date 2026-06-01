'use client'

import React from 'react'

type Step = { number: string; title: string; description: string; id?: string | null }
type Props = { sectionTag: string; heading: string; headingEmphasis: string; steps: Step[] }

export const ProcessSectionComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis, steps,
}) => {
  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''

  return (
    <section id="process" aria-label="How it works" style={{ background: '#0e1420', padding: '7rem 5%' }}>
      <div className="section-tag reveal">{sectionTag}</div>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.18, color: '#f0e6d0', marginBottom: '1.2rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={i} className={`step reveal${i > 0 ? ` reveal-delay-${i * 2}` : ''}`}>
            <div className="step-number">{step.number}</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.2rem', color: '#f0e6d0', marginBottom: '0.8rem' }}>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .process-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 4rem; position: relative; }
        .process-steps::before {
          content: ''; position: absolute; top: 2.2rem; left: calc(16.66% + 1rem); right: calc(16.66% + 1rem);
          height: 1px; background: linear-gradient(90deg, transparent, #b8975a 30%, #b8975a 70%, transparent); opacity: 0.3;
        }
        .step { padding: 0 2rem; text-align: center; position: relative; }
        .step-number {
          width: 4.5rem; height: 4.5rem; border-radius: 50%; border: 1px solid rgba(184,151,90,0.35);
          background: #141b2a; display: flex; align-items: center; justify-content: center;
          margin: 0 auto 2rem; font-family: var(--font-serif); font-size: 1.4rem; font-weight: 300;
          color: #b8975a; position: relative; z-index: 1;
        }
        .step p { font-size: 0.85rem; font-weight: 300; color: #c8b89a; line-height: 1.8; }
        @media (max-width: 768px) {
          .process-steps { grid-template-columns: 1fr; gap: 2.5rem; }
          .process-steps::before { display: none; }
        }
      `}</style>
    </section>
  )
}