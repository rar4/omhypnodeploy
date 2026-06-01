import type { Block } from 'payload'

export const ValuesSection: Block = {
  slug: 'valuesSection',
  labels: { singular: 'Values Section', plural: 'Values Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'My Approach' },
    { name: 'heading', type: 'text', defaultValue: 'What you can always expect from me' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'expect from me' },
    { name: 'intro', type: 'textarea', defaultValue: 'Every client is different, and every session is shaped around you. But these principles run through everything I do, every time.' },
    {
      name: 'values', type: 'array', minRows: 1,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
      defaultValue: [
        { number: '01', title: 'Complete Confidentiality', description: 'What you share stays between us. My practice is governed by strict confidentiality codes, and I work in a fully private setting. You can speak freely.' },
        { number: '02', title: 'No Judgement, Ever', description: 'People often come to me carrying shame about what they\'re struggling with. That shame has no place in my practice. You will be met with warmth and genuine curiosity.' },
        { number: '03', title: 'Honest, Realistic Expectations', description: 'I will never promise a cure or make claims that can\'t be kept. I\'ll be honest with you about what hypnotherapy can realistically achieve, and how many sessions you might need.' },
        { number: '04', title: 'You Are Always in Control', description: 'Hypnotherapy is a collaborative process. You cannot be made to do anything against your values or will. Everything happens with your full knowledge and consent.' },
        { number: '05', title: 'Evidence-Based Practice', description: 'My methods are rooted in research. I stay current through ongoing training and supervision, and I only use approaches that are supported by evidence.' },
        { number: '06', title: 'A Whole-Person View', description: 'I don\'t treat symptoms in isolation. I\'m interested in you — your life, your context, your strengths — and that shapes every session we have together.' },
      ],
    },
  ],
}