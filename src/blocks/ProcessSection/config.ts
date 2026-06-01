import type { Block } from 'payload'

export const ProcessSection: Block = {
  slug: 'processSection',
  labels: { singular: 'Process Section', plural: 'Process Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'The Process' },
    { name: 'heading', type: 'text', defaultValue: 'Simple. Guided. Transformative.' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'Transformative.' },
    {
      name: 'steps', type: 'array', minRows: 3, maxRows: 3,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
      defaultValue: [
        { number: 'I', title: 'Free Consultation', description: 'We start with an open, judgement-free conversation. I\'ll listen carefully, understand your goals, and explain exactly what to expect.' },
        { number: 'II', title: 'Bespoke Sessions', description: 'Each session is tailored around you. We work at a pace that feels right, combining hypnotherapy with practical tools for lasting change.' },
        { number: 'III', title: 'Lasting Change', description: 'Most clients notice meaningful shifts within 3–5 sessions. You\'ll leave with techniques to reinforce your progress every day.' },
      ],
    },
  ],
}