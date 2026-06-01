'use client'
import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer
      style={{
        background: '#0e1420',
        padding: '3rem 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        borderTop: '1px solid rgba(184,151,90,0.08)',
        marginTop: 'auto',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontSize: '1.1rem',
          color: '#c8b89a',
          textDecoration: 'none',
        }}
      >
        Oleksandr{' '}
        <span style={{ color: '#b8975a', fontStyle: 'italic' }}>Mishchenko</span>
      </Link>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
        }}
      >
        {[
          { href: '/home', label: 'Home' },
          { href: '/about', label: 'O mnie' },
          { href: '/contact', label: 'Kontakt' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4a5568',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <p
        style={{
          fontSize: '0.75rem',
          color: '#4a5568',
          letterSpacing: '0.04em',
        }}
      >
        &copy; 2027 Oleksandr Mishchenko Hypnotherapy. All rights reserved.
      </p>

      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}