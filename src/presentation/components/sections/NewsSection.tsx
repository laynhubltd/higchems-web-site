import { Card, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { container } from '@/app/di/container'
import type { NewsArticle } from '@/domain/site-content/entities'
import { SectionShell } from '@/presentation/components/layout/SectionShell'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'

export function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [meta, setMeta] = useState<{ eyebrow: string; title: string; linkLabel: string } | null>(
    null,
  )

  useEffect(() => {
    Promise.all([
      container.contentRepository.getNews(),
      container.getHomePageContent.execute(),
    ]).then(([news, content]) => {
      setArticles(news)
      setMeta(content.news)
    })
  }, [])

  if (!meta) return null

  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <SectionShell id="news" className="bg-surface">
      <SectionHeader
        eyebrow={meta.eyebrow}
        title={meta.title}
        linkLabel={meta.linkLabel}
        className="mb-12"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {featured && (
          <FadeUp>
            <Card
              className="h-full overflow-hidden border-maroon-tint !shadow-none lg:row-span-2"
              styles={{ body: { padding: 0 } }}
            >
              <div className="flex h-48 items-center justify-center bg-maroon text-6xl text-white/10 lg:h-64">
                {featured.icon}
              </div>
              <div className="p-6">
                <Tag color="#800000" className="mb-3">
                  {featured.tag}
                </Tag>
                <div className="mb-3 font-serif text-2xl font-semibold text-maroon">
                  {featured.title}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6a7a8a]">{featured.excerpt}</p>
                <div className="text-xs text-muted">
                  {featured.date} · {featured.readTime}
                </div>
              </div>
            </Card>
          </FadeUp>
        )}

        <div className="flex flex-col gap-5">
          {rest.map((article) => (
            <FadeUp key={article.id}>
              <Card
                className="border-maroon-tint !shadow-none"
                styles={{ body: { padding: 0 } }}
              >
                <div className="flex gap-4">
                  <div className="flex w-24 shrink-0 items-center justify-center bg-maroon-tint text-3xl">
                    {article.icon}
                  </div>
                  <div className="p-4">
                    <Tag color="#800000" className="mb-2">
                      {article.tag}
                    </Tag>
                    <div className="mb-2 font-serif text-lg font-semibold text-maroon">
                      {article.title}
                    </div>
                    <p className="mb-2 text-xs leading-relaxed text-[#6a7a8a]">{article.excerpt}</p>
                    <div className="text-xs text-muted">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
