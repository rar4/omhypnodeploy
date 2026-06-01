import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviewsBlock',
  labels: { singular: 'Reviews Section', plural: 'Reviews Sections' },
  fields: [
    { name: 'averageRating', type: 'text', defaultValue: '4.9' },
    { name: 'totalReviews', type: 'text', defaultValue: '127' },
    { name: 'recommendPercent', type: 'text', defaultValue: '96%' },
    { name: 'avgSessions', type: 'text', defaultValue: '3.8' },
    {
      name: 'reviews', type: 'array', minRows: 1,
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'authorName', type: 'text', required: true },
        { name: 'authorLocation', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'platform', type: 'text', defaultValue: 'Verified Client · Google Reviews' },
        { name: 'stars', type: 'number', min: 1, max: 5, defaultValue: 5 },
        { name: 'category', type: 'select', options: ['anxiety', 'phobia', 'sleep', 'confidence', 'habits', 'trauma'], required: true },
        { name: 'featured', type: 'checkbox', defaultValue: false },
      ],
    },
  ],
}