import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  active?: boolean
  id: number
  setActive: Dispatch<SetStateAction<number>>
  children: React.ReactNode
}

export default function NavLink({
  href,
  active = false,
  id,
  setActive,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => setActive(id)}
      className={cn(
        'text-sm transition-all duration-300 ease-out hover:text-white',
        {
          'text-primary hover:text-primary': active
        }
      )}
    >
      {children}
    </Link>
  )
}
