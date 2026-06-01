'use client'
import React, { useEffect, useRef } from 'react'

type Props = {
  tag: string
  heading: string
  subtitle: string
  primaryButton: { label: string; url: string }
  secondaryButton: { label: string; url: string }
}

export const HeroBlockComponent: React.FC<Props> = ({
  tag,
  heading,
  subtitle,
  primaryButton,
  secondaryButton,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    const rings: { r: number; phase: number; speed: number }[] = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const cx = () => canvas.width * 0.42
    const cy = () => canvas.height * 0.48

    for (let i = 0; i < 7; i++) {
      rings.push({ r: 60 + i * 90, phase: (i / 7) * Math.PI * 2, speed: 0.0008 + i * 0.00012 })
    }

    const drawRings = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rings.forEach((ring) => {
        const pulse = Math.sin(t * ring.speed * 1000 + ring.phase)
        const r = ring.r + pulse * 18
        const alpha = 0.08 + pulse * 0.04
        ctx.beginPath()
        ctx.arc(cx(), cy(), r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(184,151,90,${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      const angle = t * 0.00015
      for (let i = 0; i < 12; i++) {
        const a = angle + (i / 12) * Math.PI * 2
        const r1 = 280
        const r2 = 295
        ctx.beginPath()
        ctx.moveTo(cx() + Math.cos(a) * r1, cy() + Math.sin(a) * r1)
        ctx.lineTo(cx() + Math.cos(a) * r2, cy() + Math.sin(a) * r2)
        ctx.strokeStyle = 'rgba(184,151,90,0.18)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
      animFrame = requestAnimationFrame(drawRings)
    }
    animFrame = requestAnimationFrame(drawRings)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 65% 50%, #1a2540 0%, #080c14 70%)',
        }}
      />
      <canvas
        ref={canvasRef}
        className="ripple-canvas"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '56%',
          height: '100%',
          opacity: 0.22,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 5%',
          maxWidth: '640px',
          animation: 'heroIn 1.2s cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        <p className="hero-tag">{tag}</p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 6vw, 5.2rem)',
            lineHeight: 1.1,
            color: '#f0e6d0',
            marginBottom: '1.6rem',
            animation: 'heroIn 1s 0.25s both',
          }}
        >
          {heading.includes('\n') ? (
            heading.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? (
                  <>
                    <br />
                    <em style={{ fontStyle: 'italic', color: '#d4b07c', fontWeight: 300 }}>{line}</em>
                  </>
                ) : (
                  line
                )}
              </React.Fragment>
            ))
          ) : (
            heading
          )}
        </h1>
        <p
          className="hero-sub"
          style={{
            fontSize: '1rem',
            fontWeight: 300,
            color: '#c8b89a',
            maxWidth: '480px',
            marginBottom: '2.8rem',
            animation: 'heroIn 1s 0.35s both',
          }}
        >
          {subtitle}
        </p>
        <div
          className="btn-group"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            animation: 'heroIn 1s 0.45s both',
          }}
        >
          <a
            href={primaryButton.url}
            className="btn-primary"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.2rem',
              background: '#b8975a',
              color: '#080c14',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.25s, transform 0.2s',
            }}
          >
            {primaryButton.label}
          </a>
          <a
            href={secondaryButton.url}
            className="btn-secondary"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.2rem',
              border: '1px solid rgba(240,230,208,0.3)',
              color: '#f0e6d0',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
            }}
          >
            {secondaryButton.label}
          </a>
        </div>
      </div>

      <div
        className="scroll-hint"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '5%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#4a5568',
          animation: 'heroIn 1s 0.8s both',
        }}
      >
        <span className="scroll-line" />
        Scroll to explore
      </div>

      <style jsx>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-tag {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b8975a;
          margin-bottom: 1.6rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          animation: heroIn 1s 0.15s both;
        }
        .hero-tag::before {
          content: '';
          display: inline-block;
          width: 36px;
          height: 1px;
          background: #b8975a;
        }
        .scroll-line {
          width: 36px;
          height: 1px;
          background: #4a5568;
          position: relative;
          overflow: hidden;
        }
        .scroll-line::after {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: #b8975a;
          animation: scrollPulse 2s 1.5s infinite;
        }
        @keyframes scrollPulse {
          0%   { left: -100%; }
          50%  { left: 0; }
          100% { left: 100%; }
        }
        .btn-primary:hover { background: #d4b07c !important; transform: translateY(-1px); }
        .btn-secondary:hover {
          border-color: rgba(240,230,208,0.6) !important;
          background: rgba(240,230,208,0.06) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .ripple-canvas { opacity: 0.1 !important; width: 100% !important; }
          .hero-tag { font-size: 0.65rem; }
        }
      `}</style>
    </section>
  )
}
