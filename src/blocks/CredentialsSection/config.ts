import type { Block } from 'payload'

export const CredentialsSection: Block = {
  slug: 'credentialsSection',
  labels: { singular: 'Credentials Section', plural: 'Credentials Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'Qualifications & Training' },
    { name: 'heading', type: 'text', defaultValue: 'Grounded in evidence & experience' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'evidence & experience' },
    {
      name: 'credentials', type: 'array', minRows: 1,
      fields: [
        { name: 'year', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
      defaultValue: [
        { year: '2012', title: 'Diploma in Clinical Hypnotherapy', description: 'London College of Clinical Hypnosis — LCCH. Full clinical training covering therapeutic hypnosis, psychotherapy, and counselling.' },
        { year: '2014', title: 'Advanced Cognitive Hypnotherapy', description: 'Quest Institute, London. Post-graduate training integrating cognitive-behavioural models with hypnotic techniques.' },
        { year: '2016', title: 'Trauma-Informed Practice Certificate', description: 'Specialist training in working with complex trauma, PTSD, and adverse childhood experiences.' },
        { year: '2018', title: 'Solution-Focused Brief Therapy', description: 'BRIEF, London. Qualification in SFBT, enabling fast, goal-directed work alongside hypnotherapy.' },
        { year: 'Ongoing', title: 'GHR Registered & NCH Member', description: 'Full registration with the General Hypnotherapy Register and National Council for Hypnotherapy. Bound by their codes of ethics and practice.' },
        { year: 'Ongoing', title: 'Continuing Professional Development', description: 'Minimum 30 hours per year of supervised CPD, keeping practice current with the latest research and approaches.' },
      ],
    },
  ],
}