'use client'

import React from 'react'

type Cred = { year: string; title: string; description: string; id?: string | null }
type Props = { sectionTag: string; heading: string; headingEmphasis: string; credentials: Cred[] }

const delayMap = [0, 1, 2, 0, 1, 2]

export const CredentialsSectionComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis, credentials,
}) => {
  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''

  return (
    <section id="credentials" aria-label="Qualifications" style={{ background: '#0e1420', padding: '6rem 5%' }}>
      <div className="section-tag reveal">{sectionTag}</div>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2, color: '#f0e6d0', marginBottom: '1.2rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>
      <div className="cred-grid">
        {credentials.map((c, i) => (
          <div key={i} className={`cred-card reveal${i < delayMap.length ? ` reveal-delay-${delayMap[i]}` : ''}`}>
            <div className="cred-year" style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', color: '#b8975a', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{c.year}</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.05rem', color: '#f0e6d0', marginBottom: '0.4rem' }}>{c.title}</h3>
            <p style={{ fontSize: '0.82rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.7 }}>{c.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .cred-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(184,151,90,0.08); border: 1px solid rgba(184,151,90,0.1); margin-top: 3.5rem; }
        .cred-card { background: #0e1420; padding: 2rem 1.8rem; transition: background 0.3s; }
        .cred-card:hover { background: #10172a; }
        @media (max-width: 768px) { .cred-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}