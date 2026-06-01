import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { HeroBlockComponent } from '@/blocks/HeroBlock/Component'
import { IntroSectionComponent } from '@/blocks/IntroSection/Component'
import { ServicesSectionComponent } from '@/blocks/ServicesSection/Component'
import { ProcessSectionComponent } from '@/blocks/ProcessSection/Component'
import { TestimonialBlockComponent } from '@/blocks/TestimonialBlock/Component'
import { CTABandComponent } from '@/blocks/CTABand/Component'
import { PageHeaderComponent } from '@/blocks/PageHeader/Component'
import { StorySectionComponent } from '@/blocks/StorySection/Component'
import { CredentialsSectionComponent } from '@/blocks/CredentialsSection/Component'
import { ValuesSectionComponent } from '@/blocks/ValuesSection/Component'
import { ContactBlockComponent } from '@/blocks/ContactBlock/Component'
import { FAQBlockComponent } from '@/blocks/FAQBlock/Component'
import { ReviewsBlockComponent } from '@/blocks/ReviewsBlock/Component'

const blockComponents = {
  heroBlock: HeroBlockComponent,
  introSection: IntroSectionComponent,
  servicesSection: ServicesSectionComponent,
  processSection: ProcessSectionComponent,
  testimonialBlock: TestimonialBlockComponent,
  ctaBand: CTABandComponent,
  pageHeader: PageHeaderComponent,
  storySection: StorySectionComponent,
  credentialsSection: CredentialsSectionComponent,
  valuesSection: ValuesSectionComponent,
  contactBlock: ContactBlockComponent,
  faqBlock: FAQBlockComponent,
  reviewsBlock: ReviewsBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
