'use client'

import React from 'react'
import Link from 'next/link'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#b8975a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
)

export const TestimonialBlockComponent: React.FC<{
  quote: string; authorName: string; authorDetail?: string; stars: number; ctaLabel: string; ctaUrl: string
}> = ({ quote, authorName, authorDetail, stars, ctaLabel, ctaUrl }) => (
  <section id="testimonial" aria-label="Client review" className="testimonial-section" style={{ background: '#141b2a', position: 'relative', overflow: 'hidden', padding: '7rem 5%' }}>
    <div className="testimonial-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
      <div className="stars reveal" style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '3rem' }}>
        {Array.from({ length: stars }, (_, i) => <StarIcon key={i} />)}
      </div>
      <blockquote className="testimonial-quote reveal reveal-delay-1">
        {quote}
      </blockquote>
      <p className="testimonial-author reveal reveal-delay-2" style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8975a', marginBottom: '2.5rem' }}>
        {authorName}
        {authorDetail && <span style={{ color: '#c8b89a', marginLeft: '0.5rem', letterSpacing: '0.08em', fontStyle: 'italic', textTransform: 'none' }}>— {authorDetail}</span>}
      </p>
      <Link href={ctaUrl} className="btn-secondary reveal reveal-delay-3" style={{ display: 'inline-block', padding: '0.9rem 2.2rem', border: '1px solid rgba(240,230,208,0.3)', color: '#f0e6d0', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'all 0.25s' }}>
        {ctaLabel}
      </Link>
    </div>

    <style jsx>{`
      .testimonial-section::before {
        content: '\\201C'; font-family: var(--font-serif); font-size: 20rem; line-height: 1;
        color: rgba(184,151,90,0.06); position: absolute; top: -2rem; left: 3%; pointer-events: none;
      }
      .testimonial-quote {
        font-family: var(--font-serif); font-style: italic; font-weight: 300;
        font-size: clamp(1.3rem, 2.5vw, 1.75rem); line-height: 1.55; color: #f0e6d0; margin-bottom: 2rem;
      }
      .btn-secondary:hover { border-color: rgba(240,230,208,0.6) !important; background: rgba(240,230,208,0.06); transform: translateY(-1px); }
    `}</style>
  </section>
)