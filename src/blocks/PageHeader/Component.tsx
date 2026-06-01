'use client'

import React from 'react'

export const PageHeaderComponent: React.FC<{
  tag: string; heading: string; headingEmphasis: string; lead?: string
}> = ({ tag, heading, headingEmphasis, lead }) => {
  const idx = heading.indexOf(headingEmphasis)
  const lines = heading.split('\n')

  return (
    <header className="page-header" style={{ padding: '11rem 5% 6rem', background: '#0e1420', borderBottom: '1px solid rgba(184,151,90,0.1)', position: 'relative', overflow: 'hidden' }}>
      <div className="section-tag">{tag}</div>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', lineHeight: 1.1, color: '#f0e6d0', marginBottom: '1.4rem' }}>
        {lines.length > 1 ? (
          lines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {idx >= 0 && line.includes(headingEmphasis) ? (
                <>
                  {line.slice(0, line.indexOf(headingEmphasis))}
                  <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em>
                  {line.slice(line.indexOf(headingEmphasis) + headingEmphasis.length)}
                </>
              ) : line}
            </React.Fragment>
          ))
        ) : (
          <>
            {idx >= 0 ? heading.slice(0, idx) : heading}
            {idx >= 0 ? <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{headingEmphasis}</em> : null}
            {idx >= 0 ? heading.slice(idx + headingEmphasis.length) : ''}
          </>
        )}
      </h1>
      {lead && <p className="header-lead" style={{ fontSize: '1.05rem', fontWeight: 300, color: '#c8b89a', maxWidth: '520px', lineHeight: 1.8 }}>{lead}</p>}

      <style jsx>{`
        .section-tag { font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: #b8975a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #b8975a; }
        .page-header::after { content: ''; position: absolute; right: -10%; top: -20%; width: 600px; height: 600px; border-radius: 50%; border: 1px solid rgba(184,151,90,0.07); pointer-events: none; }
        .page-header::before { content: ''; position: absolute; right: 5%; top: 10%; width: 380px; height: 380px; border-radius: 50%; border: 1px solid rgba(184,151,90,0.05); pointer-events: none; }
      `}</style>
    </header>
  )
}