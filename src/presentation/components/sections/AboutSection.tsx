import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'
import { SectionShell } from '@/presentation/components/layout/SectionShell'

export function AboutSection() {
  const [about, setAbout] = useState<Awaited<
    ReturnType<typeof container.getHomePageContent.execute>
  >['about'] | null>(null)

  useEffect(() => {
    container.getHomePageContent.execute().then((c) => setAbout(c.about))
  }, [])

  if (!about) return null

  return (
    <SectionShell id="about" className="bg-white">
      <SectionHeader eyebrow={about.eyebrow} title={about.title} className="mb-6" />
      {about.paragraphs.map((p) => (
        <FadeUp key={p.slice(0, 30)}>
          <p className="mb-4 text-base leading-relaxed text-[#5a6a7a]">{p}</p>
        </FadeUp>
      ))}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {about.features.map((f) => (
          <FadeUp key={f.title}>
            <div className="h-full rounded-xl border border-maroon-tint bg-surface p-5">
              <div className="mb-3 text-2xl">{f.icon}</div>
              <div className="mb-1 font-semibold text-maroon">{f.title}</div>
              <div className="text-[13px] leading-relaxed text-[#6a7a8a]">{f.description}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
