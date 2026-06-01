'use client'

import React from 'react'
import Link from 'next/link'

type Props = {
  sectionTag: string; heading: string; headingEmphasis: string; description: string
  buttonLabel: string; buttonUrl: string
  secondaryButton?: { label?: string; url?: string }
}

export const CTABandComponent: React.FC<Props> = ({
  sectionTag, heading, headingEmphasis, description, buttonLabel, buttonUrl, secondaryButton,
}) => {
  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''

  return (
    <section id="cta-band" aria-label="Book a session" style={{ background: '#080c14', padding: '6rem 5%', textAlign: 'center', borderTop: '1px solid rgba(184,151,90,0.1)', borderBottom: '1px solid rgba(184,151,90,0.1)' }}>
      <div className="section-tag reveal" style={{ justifyContent: 'center' }}>{sectionTag}</div>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f0e6d0', marginBottom: '1rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>
      <p className="reveal reveal-delay-2" style={{ fontSize: '1rem', fontWeight: 300, color: '#c8b89a', marginBottom: '2.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
        {description}
      </p>
      <div className="reveal reveal-delay-3">
        <Link href={buttonUrl} className="btn-primary" style={{ display: 'inline-block', padding: '0.9rem 2.2rem', background: '#b8975a', color: '#080c14', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.25s, transform 0.2s' }}>
          {buttonLabel}
        </Link>
        {secondaryButton?.label && secondaryButton?.url && (
          <Link href={secondaryButton.url} className="btn-secondary" style={{ display: 'inline-block', padding: '0.9rem 2.2rem', border: '1px solid rgba(240,230,208,0.3)', color: '#f0e6d0', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'all 0.25s', marginLeft: '1rem' }}>
            {secondaryButton.label}
          </Link>
        )}
      </div>

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .btn-primary:hover { background: #d4b07c; transform: translateY(-1px); }
        .btn-secondary:hover { border-color: rgba(240,230,208,0.6); background: rgba(240,230,208,0.06); transform: translateY(-1px); }
        @media (max-width: 640px) { .btn-secondary { margin-left: 0 !important; margin-top: 1rem; } }
      `}</style>
    </section>
  )
}