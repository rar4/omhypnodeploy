import type { Block } from 'payload'

export const PageHeader: Block = {
  slug: 'pageHeader',
  labels: { singular: 'Page Header', plural: 'Page Headers' },
  fields: [
    { name: 'tag', type: 'text', required: true },
    { name: 'heading', type: 'textarea', required: true },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'practice' },
    { name: 'lead', type: 'textarea' },
  ],
}