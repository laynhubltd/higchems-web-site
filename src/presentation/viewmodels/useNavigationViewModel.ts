import { useCallback, useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { NavItem } from '@/domain/navigation/entities/NavItem'

export function useNavigationViewModel() {
  const [items, setItems] = useState<NavItem[]>([])

  useEffect(() => {
    container.getNavigationItems.execute().then(setItems)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    const el = document.querySelector(href)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return { items, scrollToSection }
}
