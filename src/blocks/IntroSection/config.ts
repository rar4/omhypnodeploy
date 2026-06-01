import type { Block } from 'payload'

export const IntroSection: Block = {
  slug: 'introSection',
  labels: { singular: 'Intro Section', plural: 'Intro Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'What Is Hypnotherapy' },
    { name: 'heading', type: 'text', defaultValue: 'A gentle shift in perspective' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'perspective' },
    { name: 'paragraph1', type: 'textarea', defaultValue: 'Hypnotherapy is a collaborative, evidence-based therapy that uses a deeply relaxed state of focused awareness to access the part of your mind where habits, beliefs, and emotional responses are stored.' },
    { name: 'paragraph2', type: 'textarea', defaultValue: 'It\'s not sleep. It\'s not losing control. It\'s a natural, guided state — similar to the flow you feel when absorbed in a book — where we gently work with your subconscious to create lasting change.' },
    { name: 'paragraph3', type: 'textarea', defaultValue: 'Sessions are warm, conversational, and completely tailored to you. Most clients feel noticeable shifts within just a few visits.' },
    { name: 'linkLabel', type: 'text', defaultValue: 'Learn more about my approach' },
    { name: 'linkUrl', type: 'text', defaultValue: '/about' },
    {
      name: 'stats', type: 'array', minRows: 4, maxRows: 4,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
      defaultValue: [
        { number: '12+', label: 'Years Experience' },
        { number: '800+', label: 'Clients Helped' },
        { number: '96%', label: 'Feel Better After 3 Sessions' },
        { number: '100%', label: 'Fully Confidential' },
      ],
    },
  ],
}
