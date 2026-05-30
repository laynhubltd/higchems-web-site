import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { Event } from '@/domain/site-content/entities'
import { SectionShell } from '@/presentation/components/layout/SectionShell'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'

export function EventsSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [meta, setMeta] = useState<{ eyebrow: string; title: string; linkLabel: string } | null>(
    null,
  )

  useEffect(() => {
    Promise.all([
      container.contentRepository.getEvents(),
      container.getHomePageContent.execute(),
    ]).then(([evts, content]) => {
      setEvents(evts)
      setMeta(content.events)
    })
  }, [])

  if (!meta) return null

  return (
    <SectionShell id="events" className="bg-maroon-deep">
      <SectionHeader
        eyebrow={meta.eyebrow}
        title={meta.title}
        linkLabel={meta.linkLabel}
        dark
        className="mb-12"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {events.map((evt) => (
          <FadeUp key={evt.id}>
            <div className="flex cursor-pointer gap-5 rounded-[14px] border border-white/7 bg-white/3 p-6 transition-all hover:border-gold/28 hover:bg-white/5">
              <div className="min-w-[56px] rounded-[10px] border border-gold/16 bg-gold/9 px-2 py-2.5 text-center">
                <div className="font-serif text-[28px] font-bold leading-none text-gold-light">
                  {evt.day}
                </div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-gold/50">
                  {evt.month}
                </div>
              </div>
              <div className="flex-1">
                <span className="mb-2 inline-block rounded bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-light">
                  {evt.badge}
                </span>
                <div className="mb-1.5 text-base font-semibold text-white">{evt.title}</div>
                <div className="text-[13px] text-white/40">
                  📍 {evt.location} · 🕐 {evt.time}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
