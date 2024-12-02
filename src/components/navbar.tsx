'use client'

import { useEffect, useState } from 'react'
import NavLink from './nav-link'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const navlinks = [
    {
      id: 'home',
      name: 'Home',
      href: '#home'
    },
    {
      id: 'projects',
      name: 'Projects',
      href: '#projects'
    }
  ]

  const [active, setActive] = useState<string>('')
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        'fixed top-6 z-10 flex w-full max-w-default items-center justify-center opacity-0 transition-all duration-300 ease-in-out',
        {
          'opacity-100': show
        }
      )}
    >
      <ul className='flex h-8 items-center gap-4 rounded-md bg-dark bg-opacity-90 px-3 shadow-default'>
        {navlinks.map((navlink) => (
          <li key={navlink.id}>
            <NavLink
              href={navlink.href}
              active={active === navlink.id}
              id={navlink.id}
              setActive={setActive}
            >
              {navlink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
