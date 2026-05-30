import type { HomePageContent } from '@/domain/site-content/entities'

export const homePageContentSeed: HomePageContent = {
  hero: {
    pill: '🏛️ Health & Management Sciences · Takum, Taraba State',
    title: 'Build Your Future in',
    titleAccent: 'Health & Management',
    subtitle:
      'Higher Ground College of Health & Management Sciences empowers students to lead in healthcare, administration, and community service across Nigeria and beyond.',
    floatCards: [
      { label: 'Class of 2024', value: '280 Graduates' },
      {
        label: 'Applications Open',
        value: '2026/2027 Session',
        detail: 'Deadline: July, 2026',
      },
    ],
  },
  about: {
    eyebrow: 'About HIGCHEMS',
    title: 'A Legacy of Health & Management Excellence',
    paragraphs: [
      'Founded to address the growing need for qualified health and management professionals in Nigeria, HIGCHEMS has become a trusted institution in Taraba State and the wider North-East region.',
      'Our campus in Takum offers rigorous academic programmes, hands-on clinical training, and a commitment to community health that sets our graduates apart in hospitals, NGOs, and management roles nationwide.',
    ],
    features: [
      {
        icon: '🎓',
        title: 'Accredited Programmes',
        description:
          'Nursing, public health, laboratory science, and management degrees recognized by relevant professional bodies.',
      },
      {
        icon: '🏥',
        title: 'Clinical Partnerships',
        description:
          'Rotations and placements at hospitals and health centres across Taraba State.',
      },
      {
        icon: '🌍',
        title: 'Community Impact',
        description:
          'Regular outreach programmes serving Takum and surrounding communities.',
      },
      {
        icon: '📈',
        title: 'Career Ready',
        description:
          '96% of graduates employed or pursuing further studies within 12 months.',
      },
    ],
  },
  programs: {
    eyebrow: 'Academic Programs',
    title: 'Program Offerings',
    linkLabel: 'Download application form →',
  },
  activities: {
    eyebrow: 'Campus Life',
    title: 'Life Beyond the Classroom',
    linkLabel: 'All activities →',
  },
  events: {
    eyebrow: 'Upcoming Events',
    title: "What's Happening at HIGCHEMS",
    linkLabel: 'Full calendar →',
  },
  faculty: {
    eyebrow: 'Our Faculties',
    title: 'Faculty of Health & Management Sciences',
    linkLabel: 'Meet our staff →',
  },
  gallery: {
    eyebrow: 'Campus Gallery',
    title: 'Life at HIGCHEMS',
  },
  testimonials: {
    eyebrow: 'Student Voices',
    title: 'What Our Students Say',
  },
  news: {
    eyebrow: 'News & Updates',
    title: 'Latest from Campus',
    linkLabel: 'All news →',
  },
  cta: {
    title: 'Ready to Begin Your Journey at HIGCHEMS?',
    subtitle:
      'Applications for the 2025/2026 session are open. Join over 1,200 students building careers in health and management.',
    primaryLabel: 'Apply for 2025/2026',
    secondaryLabel: 'Request Information',
  },
  footer: {
    description:
      'A leading college dedicated to advancing health sciences, management education, and community service in Taraba State, Nigeria.',
    columns: [
      {
        title: 'Academics',
        links: [
          { label: 'Health Sciences', href: '#' },
          { label: 'Management Programmes', href: '#' },
          { label: 'Certifications', href: '#' },
          { label: 'Clinical Training', href: '#' },
          { label: 'Library', href: '#' },
          { label: 'Academic Calendar', href: '#' },
        ],
      },
      {
        title: 'Information',
        links: [
          { label: 'About HIGCHEMS', href: '#about' },
          { label: 'Administration', href: '#' },
          { label: 'News & Events', href: '#news' },
          { label: 'Alumni Network', href: '#' },
          { label: 'Admissions', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
    ],
    copyright:
      '© 2025 Higher Ground College of Health & Management Sciences. All rights reserved.',
    social: [
      { label: 'f', href: '#' },
      { label: 'in', href: '#' },
      { label: '𝕏', href: '#' },
      { label: '▶', href: '#' },
    ],
  },
}
