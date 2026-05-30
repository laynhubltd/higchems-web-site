import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { Testimonial } from '@/domain/site-content/entities'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [meta, setMeta] = useState<{ eyebrow: string; title: string } | null>(null)

  useEffect(() => {
    Promise.all([
      container.contentRepository.getTestimonials(),
      container.getHomePageContent.execute(),
    ]).then(([items, content]) => {
      setTestimonials(items)
      setMeta(content.testimonials)
    })
  }, [])

  if (!meta) return null

  return (
    <section className="bg-maroon-deep px-8 py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader eyebrow={meta.eyebrow} title={meta.title} dark centered className="mb-12" />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <FadeUp key={t.id}>
              <Card
                className="h-full border-white/7 bg-white/3 !shadow-none"
                styles={{ body: { padding: 28 } }}
              >
                <div className="mb-4 font-serif text-5xl leading-none text-gold/30">"</div>
                <p className="mb-6 text-[15px] leading-relaxed text-white/55">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-semibold text-gold-light">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/35">{t.role}</div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
