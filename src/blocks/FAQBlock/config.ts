import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faqBlock',
  labels: { singular: 'FAQ Section', plural: 'FAQ Sections' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: 'Before You Book' },
    { name: 'heading', type: 'text', defaultValue: 'Questions people often ask' },
    { name: 'headingEmphasis', type: 'text', defaultValue: 'often ask' },
    {
      name: 'faqs', type: 'array', minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
      defaultValue: [
        { question: 'Will I be in control during hypnosis?', answer: 'Yes, completely. Hypnotherapy is a collaborative process. You are aware of everything that happens, you can speak, move, or end the session at any time. You cannot be made to do or say anything against your will.' },
        { question: 'How many sessions will I need?', answer: 'It varies. Specific phobias and habit-based issues often resolve in 1–3 sessions. Anxiety, confidence, and complex issues typically take 4–8 sessions. I\'ll give you an honest estimate in your free consultation.' },
        { question: 'What does hypnosis actually feel like?', answer: 'Most people describe it as deeply relaxed but completely aware — similar to being absorbed in a good book or just before falling asleep. You\'ll hear everything I say and remember most of the session.' },
        { question: 'Can I be hypnotised if I\'m sceptical?', answer: 'Absolutely. Scepticism doesn\'t prevent hypnotherapy from working. What matters is a willingness to try and a desire for change — you don\'t need to "believe in" it for it to be effective.' },
        { question: 'How much does a session cost?', answer: 'Sessions are £120 for 60 minutes. A 90-minute extended session is £165. The initial consultation (30 minutes) is always free. I offer a small number of reduced-rate spaces — please ask if cost is a concern.' },
        { question: 'Do you offer online sessions?', answer: 'Yes. Online sessions are available via Zoom or Teams and are equally effective. Many of my clients prefer the convenience, and some have never set foot in my practice at all.' },
        { question: 'Is everything I say confidential?', answer: 'Yes. Everything shared in sessions is strictly confidential and governed by the GHR and NCH codes of ethics. The only exceptions — as with all therapists — are situations where there is a serious risk of harm.' },
        { question: 'What if I\'ve tried therapy before and it didn\'t work?', answer: 'Many of my clients come having tried other approaches. Hypnotherapy works differently — it targets the subconscious level where patterns are stored, rather than just examining them cognitively. It\'s often effective precisely where other methods haven\'t been.' },
      ],
    },
  ],
}