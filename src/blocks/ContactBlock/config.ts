import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  fields: [
    { name: 'sectionHeading', type: 'text', defaultValue: 'What happens next' },
    { name: 'sectionHeadingEmphasis', type: 'text', defaultValue: 'next' },
    { name: 'introText', type: 'textarea', defaultValue: 'After you send your message, I\'ll reach out within one working day to schedule a free, 30-minute introductory call. There\'s no obligation and no scripts — just a genuine conversation.' },
    { name: 'formHeading', type: 'text', defaultValue: 'Book your free consultation' },
    { name: 'formSubheading', type: 'text', defaultValue: 'All details are kept strictly confidential. I aim to respond within one working day.' },
    { name: 'noticeText', type: 'textarea', defaultValue: 'By submitting this form you agree to being contacted by Sarah Ellwood Hypnotherapy. Your information is never shared with third parties and is handled in accordance with GDPR. All communications are strictly confidential.' },
    {
      name: 'contactDetails', type: 'group',
      fields: [
        { name: 'address', type: 'textarea', defaultValue: '12 Harley Street, Marylebone\nLondon, W1G 9PG' },
        { name: 'addressExtra', type: 'text', defaultValue: 'Easy access from Oxford Circus & Regent\'s Park' },
        { name: 'phone', type: 'text', defaultValue: '+44 (0)20 7123 4567' },
        { name: 'phoneHours', type: 'text', defaultValue: 'Mon–Fri, 9am–6pm' },
        { name: 'email', type: 'text', defaultValue: 'hello@sarahellwood.co.uk' },
        { name: 'emailExtra', type: 'text', defaultValue: 'Replied within one working day' },
        { name: 'onlineInfo', type: 'text', defaultValue: 'Available via Zoom or Teams' },
        { name: 'onlineExtra', type: 'text', defaultValue: 'Equally effective, just more convenient' },
        { name: 'sessionDuration', type: 'text', defaultValue: '60 minutes (standard)' },
        { name: 'sessionExtra', type: 'text', defaultValue: 'Free 30-min consultation · 90-min extended available' },
      ],
    },
  ],
}