import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  active?: boolean
  children: React.ReactNode
}

export default function NavLink({
  href,
  active = false,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn('transition-all duration-300 ease-out hover:text-white', {
        'text-primary hover:text-primary': active
      })}
    >
      {children}
    </Link>
  )
}
