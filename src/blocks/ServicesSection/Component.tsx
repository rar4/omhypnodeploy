'use client'

import React from 'react'

type Service = { title: string; description: string; icon: string; id?: string | null }
type Props = {
  sectionTag: string
  heading: string
  headingEmphasis: string
  description: string
  services: Service[]
}

const icons: Record<string, React.ReactNode> = {
  anxiety: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="12"/><circle cx="18" cy="18" r="6"/><circle cx="18" cy="18" r="2"/>
    </svg>
  ),
  phobia: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 30 C10 22, 26 22, 30 30"/><path d="M18 8 C12 14, 12 20, 18 24 C24 20, 24 14, 18 8z"/>
    </svg>
  ),
  sleep: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18 Q18 6 28 18 Q18 30 8 18z"/><circle cx="18" cy="18" r="3"/>
    </svg>
  ),
  confidence: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="12" r="5"/><path d="M8 28 C8 22 28 22 28 28"/><path d="M24 14 L28 10 M28 10 L24 10 M28 10 L28 14"/>
    </svg>
  ),
  habits: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 L20 14 L28 14 L22 19 L24 27 L18 22 L12 27 L14 19 L8 14 L16 14 Z"/>
    </svg>
  ),
  trauma: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#8aaf9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8 C10 8 6 14 6 18 C6 24 10 28 18 28 C26 28 30 24 30 18"/><path d="M24 8 L30 8 L30 14"/><path d="M18 15 L18 21 M15 18 L21 18"/>
    </svg>
  ),
}

export const ServicesSectionComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis, description, services,
}) => {
  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''

  return (
    <section id="services" aria-label="Areas I help with" style={{ background: '#080c14', padding: '7rem 5%' }}>
      <div className="services-header">
        <div>
          <div className="section-tag reveal">{sectionTag}</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.18, color: '#f0e6d0', marginBottom: '1.2rem' }}>
            {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
          </h2>
        </div>
        <div className="reveal reveal-delay-2">
          <p className="section-lead">{description}</p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className={`service-card reveal${i >= 3 ? ` reveal-delay-${(i % 3) + 1}` : i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="service-icon">{icons[s.icon] || icons.anxiety}</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.15rem', color: '#f0e6d0', marginBottom: '0.6rem' }}>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .services-header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; margin-bottom: 4rem; }
        .section-lead { font-size: 1rem; font-weight: 300; color: #c8b89a; max-width: 580px; line-height: 1.8; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(184,151,90,0.08); border: 1px solid rgba(184,151,90,0.1); }
        .service-card { background: #080c14; padding: 2rem 1.6rem; transition: background 0.3s; cursor: default; }
        .service-card:hover { background: #0f1520; }
        .service-icon { width: 36px; height: 36px; margin-bottom: 1.2rem; opacity: 0.7; }
        .service-card p { font-size: 0.85rem; font-weight: 300; color: #c8b89a; line-height: 1.75; }
        @media (max-width: 768px) {
          .services-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
