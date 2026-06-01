import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonialBlock',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  fields: [
    { name: 'quote', type: 'textarea', required: true },
    { name: 'authorName', type: 'text', required: true },
    { name: 'authorDetail', type: 'text' },
    { name: 'stars', type: 'number', min: 1, max: 5, defaultValue: 5 },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Read all reviews →' },
    { name: 'ctaUrl', type: 'text', defaultValue: '/reviews' },
  ],
}