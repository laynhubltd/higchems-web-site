import { LinkMore } from '@/presentation/components/links'
import { FadeUp } from './FadeUp'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  linkLabel?: string
  linkHref?: string
  dark?: boolean
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  linkLabel,
  linkHref = '#',
  dark = false,
  centered = false,
  className = 'mb-12',
}: SectionHeaderProps) {
  return (
    <FadeUp
      className={
        centered
          ? `${className} mx-auto max-w-xl text-center`
          : `${className} flex items-end justify-between`
      }
    >
      <div className={centered ? '' : ''}>
        <p
          className={`mb-2 text-[11px] font-bold uppercase tracking-[1.2px] ${dark ? 'text-gold-light' : 'text-gold'}`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-serif text-[clamp(28px,4vw,44px)] font-bold leading-tight ${dark ? 'text-white' : 'text-maroon'}`}
        >
          {title}
        </h2>
      </div>
      {linkLabel && !centered && <LinkMore href={linkHref}>{linkLabel}</LinkMore>}
    </FadeUp>
  )
}
