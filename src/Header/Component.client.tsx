'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const HeaderClient: React.FC = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path || (path !== '/' && pathname?.startsWith(path))

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.4rem 5%',
    background: 'rgba(8,12,20,0.7)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    borderBottom: '1px solid rgba(184,151,90,0.12)',
    transition: 'background 0.4s',
  }

  return (
    <nav style={navStyle} id="navbar">
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontSize: '1.25rem',
          letterSpacing: '0.06em',
          color: '#f0e6d0',
          textDecoration: 'none',
        }}
      >
        Oleksandr{' '}
        <span style={{ color: '#b8975a', fontStyle: 'italic' }}>Mishchenko</span>
      </Link>

      <ul
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          alignItems: 'center',
        }}
        className="nav-links-desktop"
      >
        {[
          { href: '/home', label: 'Home' },
          { href: '/about', label: 'O Mnie' },
          { href: '/#process', label: 'Jak to działa' },
          { href: '/contact', label: 'Kontakt' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isActive(href) ? '#d4b07c' : '#c8b89a',
                textDecoration: 'none',
                transition: 'color 0.25s',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            style={{
              fontSize: '0.78rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#b8975a',
              textDecoration: 'none',
              border: '1px solid rgba(184,151,90,0.4)',
              padding: '0.5rem 1.2rem',
              borderRadius: '2px',
              transition: 'all 0.25s',
            }}
          >
            Zapisz Się na konsultację
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#f0e6d0',
            margin: '5px 0',
            transition: 'all 0.3s',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#f0e6d0',
            margin: '5px 0',
            transition: 'all 0.3s',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#f0e6d0',
            margin: '5px 0',
            transition: 'all 0.3s',
          }}
        />
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .menu-toggle {
            display: block !important;
          }
          .nav-links-desktop {
            display: ${menuOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(8,12,20,0.97);
            backdrop-filter: blur(20px);
            padding: 2rem 5%;
            border-bottom: 1px solid rgba(184,151,90,0.12);
          }
        }
      `}</style>
    </nav>
  )
}