import { useEffect, useRef, useState } from 'react'
import { container } from '@/app/di/container'
import type { Stat } from '@/domain/site-content/entities'

function animateCounter(
  setValue: (v: number) => void,
  target: number,
  duration: number,
) {
  const step = target / (duration / 16)
  let current = 0
  const timer = setInterval(() => {
    current = Math.min(current + step, target)
    setValue(Math.round(current))
    if (current >= target) clearInterval(timer)
  }, 16)
}

export function useStatsViewModel() {
  const [stats, setStats] = useState<Stat[]>([])
  const [values, setValues] = useState<Record<string, number>>({})
  const bandRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    container.contentRepository.getStats().then((data) => {
      setStats(data)
      setValues(Object.fromEntries(data.map((s) => [s.id, 0])))
    })
  }, [])

  useEffect(() => {
    const band = bandRef.current
    if (!band || stats.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          stats.forEach((stat) => {
            animateCounter(
              (v) => setValues((prev) => ({ ...prev, [stat.id]: v })),
              stat.value,
              stat.id === 's3' || stat.id === 's4' ? 1000 : 1200,
            )
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(band)
    return () => observer.disconnect()
  }, [stats])

  return { stats, values, bandRef }
}
