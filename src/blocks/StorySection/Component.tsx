'use client'

import React from 'react'

type Paragraph = { text: string; id?: string | null }
type Props = {
  name: string; title: string; subtitle: string; introQuote: string
  paragraphs: Paragraph[]; pullQuote: string; img: string;
}

export const StorySectionComponent: React.FC<Props> = ({
  name, title, subtitle, introQuote, paragraphs, pullQuote, img
}) => (
  <section id="story" style={{ background: '#080c14', padding: '6rem 5%' }}>
    <div className="story-grid">
      <div className="portrait-wrap reveal">
        <div className="portrait-frame" style={{ position: 'relative', aspectRatio: '3/4', maxWidth: '360px', background: '#141b2a', border: '1px solid rgba(184,151,90,0.15)', overflow: 'hidden', borderRadius: '2px' }}>
          <img src={img} alt="" />
        </div>
        <div className="portrait-caption" style={{ marginTop: '1.2rem', fontSize: '0.75rem', color: '#4a5568', letterSpacing: '0.08em', lineHeight: 1.6 }}>
          <strong style={{ display: 'block', color: '#c8b89a', fontWeight: 400, marginBottom: '0.15rem', fontSize: '0.85rem' }}>{name}</strong>
          {title}<br />{subtitle}
        </div>
      </div>

      <div className="story-text">
        <p className="reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: '#f0e6d0', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '2rem' }}>{introQuote}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} style={{ fontSize: '1.2rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.9, marginBottom: '1.4rem' }}>{p.text}</p>
        ))}
        <div className="pull-quote reveal reveal-delay-2" style={{ borderLeft: '2px solid #b8975a', padding: '0.8rem 1.5rem', margin: '2.5rem 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: '#f0e6d0', lineHeight: 1.6 }}>
          {pullQuote}
        </div>
      </div>
    </div>

    <style jsx>{`
      .story-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 6rem; align-items: start; margin-top: 1rem; }
      .portrait-wrap { position: sticky; top: 7rem; }
      @media (max-width: 768px) {
        .story-grid { grid-template-columns: 1fr; gap: 3rem; }
        .portrait-wrap { position: static; }
        .portrait-frame { max-width: 100% !important; aspect-ratio: 4/3 !important; }
      }
    `}</style>
  </section>
)