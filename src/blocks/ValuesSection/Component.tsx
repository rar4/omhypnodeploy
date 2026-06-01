'use client'

import React from 'react'

type Value = { number: string; title: string; description: string; id?: string | null }
type Props = { sectionTag: string; heading: string; headingEmphasis: string; intro: string; values: Value[] }

export const ValuesSectionComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis, intro, values,
}) => {
  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''

  return (
    <section id="values" aria-label="My approach" style={{ background: '#080c14', padding: '6rem 5%' }}>
      <div className="section-tag reveal">{sectionTag}</div>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2, color: '#f0e6d0', marginBottom: '1.2rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>
      <div className="values-intro reveal reveal-delay-2" style={{ maxWidth: '620px', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.95rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.85 }}>{intro}</p>
      </div>
      <div className="values-list">
        {values.map((v, i) => (
          <div key={i} className={`value-item reveal${i > 0 ? ` reveal-delay-${Math.min(Math.floor(i / 2) + 1, 3)}` : ''}`}>
            <div className="value-num">{v.number}</div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.1rem', color: '#f0e6d0', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.83rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.75 }}>{v.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .values-list { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(184,151,90,0.06); border: 1px solid rgba(184,151,90,0.08); }
        .value-item { background: #080c14; padding: 2.2rem 2rem; display: flex; gap: 1.5rem; align-items: flex-start; transition: background 0.3s; }
        .value-item:hover { background: #0b1018; }
        .value-num { font-family: var(--font-serif); font-size: 2.2rem; color: rgba(184,151,90,0.2); line-height: 1; flex-shrink: 0; font-weight: 300; margin-top: -0.2rem; }
        @media (max-width: 768px) { .values-list { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}