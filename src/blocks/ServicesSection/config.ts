import type { Block } from 'payload'

export const ServicesSection: Block = {
  slug: 'servicesSection',
  labels: { singular: 'Services Section', plural: 'Services Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'Areas I Help With' },
    { name: 'heading', type: 'text', defaultValue: 'What brings people to my door' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'to my door' },
    { name: 'description', type: 'textarea', defaultValue: 'Each session is bespoke. These are the most common areas where hypnotherapy creates remarkable, lasting change.' },
    {
      name: 'services', type: 'array', minRows: 6, maxRows: 6,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'select', options: ['anxiety', 'phobia', 'sleep', 'confidence', 'habits', 'trauma'], required: true },
      ],
      defaultValue: [
        { title: 'Anxiety & Stress', description: 'Learn to quiet the over-active mind and step out of the cycle of worry that keeps you stuck.', icon: 'anxiety' },
        { title: 'Phobias & Fears', description: 'Gently dissolve the unconscious roots of specific fears — from flying to public speaking.', icon: 'phobia' },
        { title: 'Sleep & Insomnia', description: 'Restore your natural relationship with sleep and wake up genuinely rested.', icon: 'sleep' },
        { title: 'Self-Confidence', description: 'Build genuine, embodied confidence that carries into interviews, relationships, and life.', icon: 'confidence' },
        { title: 'Habits & Addictions', description: 'Smoking, emotional eating, nail-biting — rewire the habits that no longer serve you.', icon: 'habits' },
        { title: 'Trauma & PTSD', description: 'A safe, gentle approach to processing difficult experiences and reclaiming peace.', icon: 'trauma' },
      ],
    },
  ],
}
