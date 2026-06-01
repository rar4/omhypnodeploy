'use client'
import React, { useState } from 'react'

type FAQ = { question: string; answer: string; id?: string | null }
type Props = { sectionTag: string; heading: string; headingEmphasis: string; faqs: FAQ[] }

export const FAQBlockComponent: React.FC<Props> = ({ sectionTag, heading, headingEmphasis, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const idx = heading.indexOf(headingEmphasis)
  const before = idx >= 0 ? heading.slice(0, idx) : heading
  const after = idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''
  const midPoint = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, midPoint)
  const right = faqs.slice(midPoint)

  return (
    <section id="faq" aria-label="Frequently asked questions" style={{ background: '#0e1420', padding: '6rem 5%' }}>
      <div className="section-tag reveal" style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b8975a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#b8975a' }} />
        {sectionTag}
      </div>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2, color: '#f0e6d0', marginBottom: '1.2rem' }}>
        {before}{headingEmphasis ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}{after}
      </h2>

      <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 4rem', marginTop: '3.5rem', alignItems: 'start' }}>
        {[left, right].map((col, colIdx) => (
          <div key={colIdx}>
            {col.map((faq, i) => {
              const globalIdx = colIdx * midPoint + i
              const isOpen = openIndex === globalIdx
              return (
                <div key={globalIdx} className={`faq-item${isOpen ? ' open' : ''}`} style={{ borderTop: '1px solid rgba(184,151,90,0.1)', padding: '1.6rem 0' }}>
                  <div
                    className="faq-q"
                    onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.05rem', color: '#f0e6d0', marginBottom: '0.6rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}
                  >
                    {faq.question}
                    <span className="faq-toggle" style={{ flexShrink: 0, fontSize: '1.2rem', color: '#b8975a', transition: 'transform 0.3s', lineHeight: 1, marginTop: '0.1rem', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                  </div>
                  <div className="faq-a" style={{ fontSize: '0.85rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.85, display: isOpen ? 'block' : 'none' }}>
                    {faq.answer}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}