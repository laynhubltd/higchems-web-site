import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { FacultyMember } from '@/domain/site-content/entities'
import { SocialLink } from '@/presentation/components/links'
import { SectionShell } from '@/presentation/components/layout/SectionShell'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'

export function FacultySection() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([])
  const [meta, setMeta] = useState<{ eyebrow: string; title: string; linkLabel: string } | null>(
    null,
  )

  useEffect(() => {
    Promise.all([
      container.contentRepository.getFaculty(),
      container.getHomePageContent.execute(),
    ]).then(([fac, content]) => {
      setFaculty(fac)
      setMeta(content.faculty)
    })
  }, [])

  if (!meta) return null

  return (
    <SectionShell id="faculty" className="bg-surface">
      <SectionHeader
        eyebrow={meta.eyebrow}
        title={meta.title}
        linkLabel={meta.linkLabel}
        className="mb-12"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member) => (
          <FadeUp key={member.id}>
            <Card
              className="border-maroon-tint text-center !shadow-none transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(128,0,0,0.08)]"
              styles={{ body: { padding: '24px 16px' } }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-maroon font-serif text-lg font-bold text-gold-light">
                {member.initials}
              </div>
              <div className="mb-1 font-semibold text-maroon">{member.name}</div>
              <div className="mb-1 text-xs text-gold">{member.role}</div>
              <div className="mb-4 text-xs text-muted">{member.department}</div>
              <div className="flex justify-center gap-2.5">
                <SocialLink variant="faculty">in</SocialLink>
                <SocialLink variant="faculty">✉</SocialLink>
                <SocialLink variant="faculty">🔬</SocialLink>
              </div>
            </Card>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
