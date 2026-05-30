import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { Program, ProgramCategory } from '@/domain/site-content/entities'

export function useProgramsViewModel() {
  const [categories, setCategories] = useState<ProgramCategory[]>([])
  const [programs, setPrograms] = useState<Program[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [sectionMeta, setSectionMeta] = useState<{
    eyebrow: string
    title: string
    linkLabel: string
  } | null>(null)

  useEffect(() => {
    Promise.all([
      container.contentRepository.getProgramCategories(),
      container.getHomePageContent.execute(),
    ]).then(([cats, content]) => {
      setCategories(cats)
      setSectionMeta(content.programs)
    })
  }, [])

  useEffect(() => {
    container.getProgramsByCategory.execute(activeCategory).then(setPrograms)
  }, [activeCategory])

  return {
    categories,
    programs,
    activeCategory,
    setActiveCategory,
    sectionMeta,
  }
}
