import type { NewsArticle } from '@/domain/site-content/entities'

export const newsSeed: NewsArticle[] = [
  {
    id: '1',
    tag: 'Admissions',
    title: '2026/2027 Admissions Now Open — Scholarships Available',
    excerpt:
      'HIGCHEMS welcomes applications for nursing, public health, management, and certification programmes. Merit and need-based scholarships available.',
    date: 'January 10, 2025',
    readTime: '4 min read',
    icon: '🎓',
    image: '/admissions-flyer.png',
    featured: true,
  },
  {
    id: '3',
    tag: 'Community',
    title: 'Students Lead Free Health Screening in Takum High Level',
    excerpt:
      'Over 500 residents received blood pressure, glucose, and malaria screening at our latest community outreach initiative.',
    date: 'January 3, 2025',
    readTime: '2 min read',
    icon: '🌿',
  },
]
