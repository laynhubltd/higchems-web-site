import type { ReactNode } from 'react'

interface SectionShellProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionShell({ id, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`px-8 py-20 ${className}`}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  )
}
