'use client'

import React from 'react'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type LinkItem = { link?: { type?: string; url?: string; label?: string; newTab?: boolean; reference?: any; appearance?: string } }

export const CallToActionBlock: React.FC<{ links?: LinkItem[]; richText?: any }> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...(link as any)} />
          })}
        </div>
      </div>
    </div>
  )
}
