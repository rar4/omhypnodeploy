'use client'

import React from 'react'

type Stat = { number: string; label: string; id?: string | null }
type Props = {
  sectionTag: string
  heading: string
  headingEmphasis: string
  paragraph1: string
  paragraph2: string
  paragraph3: string
  linkLabel: string
  linkUrl: string
  stats: Stat[]
}

export const IntroSectionComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis,
  paragraph1, paragraph2, paragraph3,
  linkLabel, linkUrl, stats,
}) => {
  const emphasisIndex = heading.indexOf(headingEmphasis)
  const before = emphasisIndex >= 0 ? heading.slice(0, emphasisIndex) : heading
  const after = emphasisIndex >= 0 ? heading.slice(emphasisIndex + headingEmphasis.length) : ''

  return (
    <section id="intro" aria-label="What is hypnotherapy" style={{ background: '#0e1420', padding: '7rem 5%' }}>
      <div className="section-tag">{sectionTag}</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.18, color: '#f0e6d0', marginBottom: '1.2rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>

      <div className="intro-grid">
        <div className="intro-text reveal">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <a href={linkUrl} className="link-arrow">{linkLabel} <span className="arrow">→</span></a>
        </div>

        <div className="intro-stats reveal reveal-delay-2">
          {stats.map((stat, i) => (
            <div key={i} className="stat-cell">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-tag {
          font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem;
        }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .intro-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3.5rem;
        }
        .intro-text p {
          font-size: 0.95rem; font-weight: 300; color: #c8b89a; margin-bottom: 1.2rem; line-height: 1.85;
        }
        .link-arrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #b8975a; text-decoration: none; margin-top: 0.8rem; transition: gap 0.2s;
        }
        .link-arrow:hover { gap: 0.8rem; }
        .arrow { font-size: 1rem; }
        .intro-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px;
          background: rgba(184,151,90,0.1); border: 1px solid rgba(184,151,90,0.12);
          border-radius: 4px; overflow: hidden;
        }
        .stat-cell { background: #141b2a; padding: 2rem 1.6rem; text-align: center; }
        .stat-number { font-family: var(--font-serif); font-size: 3rem; font-weight: 300; color: #d4b07c; line-height: 1; margin-bottom: 0.4rem; }
        .stat-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: #c8b89a; }
        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  )
}
