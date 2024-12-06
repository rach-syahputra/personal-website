import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  id: string
  active: boolean
  setActiveSection: Dispatch<SetStateAction<string>>
  children: React.ReactNode
}

export default function NavLink({
  href,
  id,
  active = false,
  setActiveSection,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => setActiveSection(id)}
      className={cn(
        'text-sm transition-all duration-300 ease-out hover:text-white lg:text-base',
        {
          'text-primary hover:text-primary': active
        }
      )}
    >
      {children}
    </Link>
  )
}
