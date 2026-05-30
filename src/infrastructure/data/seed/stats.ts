import type { Stat } from '@/domain/site-content/entities'

export const statsSeed: Stat[] = [
  {
    id: 's1',
    value: 28,
    suffix: '+',
    label: 'Academic Programs',
    sublabel: 'Across 4 faculties',
  },
  {
    id: 's2',
    value: 180,
    suffix: '+',
    label: 'Faculty & Staff',
    sublabel: 'Dedicated educators',
  },
  {
    id: 's3',
    value: 12,
    label: 'Clinical Partners',
    sublabel: 'Across Taraba State',
  },
  {
    id: 's4',
    value: 96,
    suffix: '%',
    label: 'Graduate Employment',
    sublabel: 'Within 12 months',
  },
]
