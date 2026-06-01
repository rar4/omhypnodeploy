import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
      defaultValue: 'Clinical Hypnotherapy & Mindwork',
    },
    {
      name: 'heading',
      type: 'textarea',
      required: true,
      defaultValue: 'Quiet the noise.\nReclaim yourself.',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue:
        'I help people break free from anxiety, phobias, and old patterns — using evidence-based hypnotherapy that works at the level where change actually happens.',
    },
    {
      name: 'primaryButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Book a Free Consultation' },
        { name: 'url', type: 'text', defaultValue: '/contact' },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'About Me' },
        { name: 'url', type: 'text', defaultValue: '/about' },
      ],
    },
  ],
}
