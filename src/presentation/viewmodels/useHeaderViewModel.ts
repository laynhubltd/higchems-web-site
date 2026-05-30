import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { School } from '@/domain/organization/entities/School'

export function useHeaderViewModel() {
  const [school, setSchool] = useState<School | null>(null)

  useEffect(() => {
    container.getSchoolInfo.execute().then(setSchool)
  }, [])

  return { school }
}

export function useFooterViewModel() {
  const [school, setSchool] = useState<School | null>(null)
  const [content, setContent] = useState<Awaited<
    ReturnType<typeof container.getHomePageContent.execute>
  > | null>(null)

  useEffect(() => {
    Promise.all([
      container.getSchoolInfo.execute(),
      container.getHomePageContent.execute(),
    ]).then(([schoolData, pageContent]) => {
      setSchool(schoolData)
      setContent(pageContent)
    })
  }, [])

  return { school, footer: content?.footer ?? null }
}
