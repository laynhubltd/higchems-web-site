import { Typography } from 'antd'
import type { ReactNode } from 'react'

const { Link } = Typography

interface BaseLinkProps {
  href?: string
  children: ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function BaseLink({ href = '#', children, className = '', onClick }: BaseLinkProps) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export function NavLink({ href, children, onClick }: Omit<BaseLinkProps, 'className'>) {
  return (
    <BaseLink
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-white/55 no-underline transition-colors hover:text-white"
    >
      {children}
    </BaseLink>
  )
}

export function LinkMore({ href = '#', children }: Pick<BaseLinkProps, 'href' | 'children'>) {
  return (
    <BaseLink
      href={href}
      className="text-sm font-semibold text-maroon no-underline transition-colors hover:text-gold"
    >
      {children}
    </BaseLink>
  )
}

export function ProgLink({ href = '#', children }: Pick<BaseLinkProps, 'href' | 'children'>) {
  return (
    <BaseLink href={href} className="text-[13px] font-semibold text-maroon no-underline">
      {children}
    </BaseLink>
  )
}

export function FooterLink({ href = '#', children }: Pick<BaseLinkProps, 'href' | 'children'>) {
  return (
    <BaseLink
      href={href}
      className="text-sm text-white/45 no-underline transition-colors hover:text-gold"
    >
      {children}
    </BaseLink>
  )
}

interface SocialLinkProps {
  href?: string
  children: ReactNode
  variant?: 'faculty' | 'footer'
}

export function SocialLink({ href = '#', children, variant = 'footer' }: SocialLinkProps) {
  const sizeClass =
    variant === 'faculty'
      ? 'h-[30px] w-[30px] rounded-md text-xs'
      : 'h-9 w-9 rounded-lg text-sm'

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center bg-maroon-tint font-semibold text-maroon no-underline transition-all hover:bg-maroon hover:text-gold-light ${sizeClass}`}
    >
      {children}
    </Link>
  )
}
