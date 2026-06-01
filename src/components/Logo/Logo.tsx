import React from 'react'
import Link from 'next/link'

interface Props {
  className?: string
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <Link
      href="/"
      className={`font-[var(--font-serif)] font-light text-[1.25rem] tracking-[0.06em] text-[#f0e6d0] no-underline ${className || ''}`}
    >
      Oleksandr{' '}
      <span className="text-[#b8975a] italic">Mishchenko</span>
    </Link>
  )
}
