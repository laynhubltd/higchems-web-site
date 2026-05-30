import type { Activity, ActivityStat } from '@/domain/site-content/entities'

export const activitiesSeed: Activity[] = [
  {
    id: 'clinical',
    tag: 'Clinical',
    title: 'Clinical Rotations',
    description:
      'Supervised placements at partner hospitals and health centres across Taraba State.',
    icon: '🏥',
  },
  {
    id: 'associations',
    tag: 'Community',
    title: 'Student Health Associations',
    description:
      'Join nursing, public health, and management student bodies driving campus initiatives.',
    icon: '🤝',
  },
  {
    id: 'outreach',
    tag: 'Outreach',
    title: 'Community Health Outreach',
    description:
      'Regular health screening camps and awareness drives in Takum and surrounding communities.',
    icon: '🌿',
  },
  {
    id: 'skills',
    tag: 'Skills',
    title: 'Skills & Simulation Lab',
    description:
      'Modern simulation facilities for nursing procedures, lab techniques, and emergency response.',
    icon: '🔬',
  },
]

export const activityStatsSeed: ActivityStat[] = [
  { value: '18+', label: 'Student Clubs' },
  { value: '12', label: 'Clinical Partners' },
  { value: '6', label: 'Simulation Labs' },
  { value: '40+', label: 'Outreach Events/Year' },
]
