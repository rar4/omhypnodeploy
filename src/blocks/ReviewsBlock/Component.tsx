'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type Review = {
  quote: string; authorName: string; authorLocation?: string; tag?: string
  platform?: string; stars: number; category: string; featured?: boolean; id?: string | null
}
type Props = {
  averageRating: string; totalReviews: string; recommendPercent: string; avgSessions: string
  reviews: Review[]
}

const Star = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#b8975a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
)

const filters = [
  { value: 'all', label: 'All' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'phobia', label: 'Phobias' },
  { value: 'sleep', label: 'Sleep' },
  { value: 'confidence', label: 'Confidence' },
  { value: 'habits', label: 'Habits' },
  { value: 'trauma', label: 'Trauma' },
]

export const ReviewsBlockComponent: React.FC<Props> = ({
  averageRating, totalReviews, recommendPercent, avgSessions, reviews,
}) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? reviews : reviews.filter((r) => r.category === activeFilter)

  return (
    <>
      <div className="score-band" style={{ background: '#141b2a', padding: '3.5rem 5%', borderBottom: '1px solid rgba(184,151,90,0.1)' }}>
        <div className="score-inner" style={{ display: 'flex', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>
          <div className="score-big" style={{ textAlign: 'center' }}>
            <div className="score-number" style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', fontWeight: 300, color: '#d4b07c', lineHeight: 1 }}>{averageRating}</div>
            <div className="score-stars" style={{ display: 'flex', gap: '5px', margin: '0.6rem 0' }}>
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} />)}
            </div>
            <div className="score-out" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a5568', marginTop: '0.3rem' }}>Average Rating</div>
          </div>
          <div className="score-divider" style={{ width: '1px', height: '80px', background: 'rgba(184,151,90,0.15)', flexShrink: 0 }} />
          <div className="score-stats" style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            {[
              { num: totalReviews, label: 'Total Reviews' },
              { num: recommendPercent, label: 'Would Recommend' },
              { num: avgSessions, label: 'Avg Sessions to Change' },
            ].map((s, i) => (
              <div key={i} className="score-stat">
                <div className="score-stat-num" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 300, color: '#f0e6d0', lineHeight: 1 }}>{s.num}</div>
                <div className="score-stat-label" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a5568', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-bar" style={{ padding: '2rem 5%', background: '#080c14', borderBottom: '1px solid rgba(184,151,90,0.08)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a5568', marginRight: '0.5rem' }}>Filter by</span>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
            style={{
              background: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', letterSpacing: '0.06em',
              padding: '0.45rem 1rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s',
              border: activeFilter === f.value ? '1px solid #b8975a' : '1px solid rgba(184,151,90,0.18)',
              color: activeFilter === f.value ? '#b8975a' : '#c8b89a',
              ...(activeFilter === f.value ? { background: 'rgba(184,151,90,0.12)' } : {}),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section id="reviews-section" aria-label="Client reviews" style={{ background: '#080c14', padding: '5rem 5%' }}>
        <div className="reviews-grid" style={{ columns: '3', columnGap: '1.5rem' }}>
          {filtered.map((review, i) => (
            <div key={i} className={`review-card${review.featured ? ' featured-review' : ''}`} style={{
              breakInside: 'avoid', background: review.featured ? 'linear-gradient(135deg, #141b2a 0%, #0f1822 100%)' : '#141b2a',
              border: review.featured ? '1px solid rgba(184,151,90,0.22)' : '1px solid rgba(184,151,90,0.1)',
              borderRadius: '2px', padding: '1.8rem', marginBottom: '1.5rem', transition: 'border-color 0.3s',
            }}>
              {review.featured && <div className="featured-badge" style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8975a', background: 'rgba(184,151,90,0.1)', padding: '0.2rem 0.6rem', borderRadius: '1px', display: 'inline-block', marginBottom: '1rem' }}>Featured Review</div>}
              <div className="review-stars" style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {Array.from({ length: review.stars }, (_, j) => <Star key={j} />)}
              </div>
              {review.tag && <div className="review-tag" style={{ display: 'inline-block', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8aaf9e', border: '1px solid rgba(138,175,158,0.25)', padding: '0.2rem 0.6rem', borderRadius: '1px', marginBottom: '1rem' }}>{review.tag}</div>}
              <p className="review-quote" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: review.featured ? '1.2rem' : '1.05rem', fontWeight: 300, color: '#f0e6d0', lineHeight: review.featured ? 1.6 : 1.65, marginBottom: '1.2rem' }}>{review.quote}</p>
              <div className="review-author" style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: '#b8975a' }}>
                {review.authorName}
                {review.authorLocation && <span style={{ color: '#4a5568', marginLeft: '0.4rem', fontStyle: 'italic' }}>— {review.authorLocation}</span>}
              </div>
              {review.platform && <div className="review-platform" style={{ fontSize: '0.68rem', color: '#4a5568', marginTop: '0.4rem', letterSpacing: '0.05em' }}>{review.platform}</div>}
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '4rem 0', color: '#4a5568', fontSize: '0.9rem' }}>No reviews found for this category yet.</p>}
      </section>

      <section id="more-reviews" style={{ background: '#141b2a', borderTop: '1px solid rgba(184,151,90,0.1)', borderBottom: '1px solid rgba(184,151,90,0.1)', padding: '5rem 5%' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#f0e6d0', marginBottom: '2rem', textAlign: 'center' }}>
          More <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>reviews</em>
        </h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { label: 'Google Reviews', href: 'https://www.google.com/search?q=Sarah+Ellwood+Hypnotherapy' },
            { label: 'Trustpilot', href: 'https://www.trustpilot.com/search?query=Sarah+Ellwood+Hypnotherapy' },
            { label: 'Facebook', href: 'https://www.facebook.com/search/top?q=Sarah+Ellwood+Hypnotherapy' },
            { label: 'Instagram', href: 'https://www.instagram.com/explore/tags/sarahellwoodhypnotherapy' },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.9rem 1.8rem', background: 'rgba(184,151,90,0.08)', border: '1px solid rgba(184,151,90,0.2)', borderRadius: '2px', color: '#c8b89a', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.05em', transition: 'all 0.25s' }}>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <style jsx>{`
        .review-card:hover { border-color: rgba(184,151,90,0.25) !important; }
        .social-link:hover { background: rgba(184,151,90,0.15); border-color: rgba(184,151,90,0.4); color: #d4b07c; }
        .filter-btn:hover { border-color: rgba(184,151,90,0.4); color: #f0e6d0; }
        @media (max-width: 960px) { .reviews-grid { columns: 2 !important; } }
        @media (max-width: 640px) { .reviews-grid { columns: 1 !important; } }
        @media (max-width: 768px) {
          .score-divider { display: none; }
          .score-inner { gap: 2.5rem; }
        }
      `}</style>
    </>
  )
}