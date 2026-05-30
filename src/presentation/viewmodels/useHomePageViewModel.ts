import { useCallback, useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { HomePageContent } from '@/domain/site-content/entities'

export function useHomePageViewModel() {
  const [content, setContent] = useState<HomePageContent | null>(null)

  useEffect(() => {
    container.getHomePageContent.execute().then(setContent)
  }, [])

  const onApply = useCallback(() => {
    window.alert('Admissions application portal coming soon.')
  }, [])

  const onRequestInfo = useCallback(() => {
    window.alert('Information request form coming soon.')
  }, [])

  return {
    content,
    onApply,
    onRequestInfo,
  }
}
