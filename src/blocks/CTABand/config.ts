import type { Block } from 'payload'

export const CTABand: Block = {
  slug: 'ctaBand',
  labels: { singular: 'CTA Band', plural: 'CTA Bands' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'Take the first step' },
    { name: 'heading', type: 'text', defaultValue: 'Ready to feel different?' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'different?' },
    { name: 'description', type: 'textarea', defaultValue: 'The first conversation is completely free, and completely without pressure. Let\'s find out if we\'re a good fit.' },
    { name: 'buttonLabel', type: 'text', defaultValue: 'Book Your Free Consultation' },
    { name: 'buttonUrl', type: 'text', defaultValue: '/contact' },
    {
      name: 'secondaryButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}