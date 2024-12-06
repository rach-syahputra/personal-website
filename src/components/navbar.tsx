/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
      id: 'about',
      name: 'About',
      href: '#about'
    },
    {
      id: 'projects',
      name: 'Projects',
      href: '#projects'
    }
  ]

  const [activeSection, setActiveSection] = useState<string>('')
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
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    navlinks.forEach((navlink) => {
      const element = document.getElementById(navlink.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [navlinks])

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        'fixed top-6 z-10 flex w-full items-center justify-center opacity-0 transition-all duration-300 ease-in-out',
        { 'opacity-100': show }
      )}
    >
      <ul className=':h-8 flex items-center gap-4 rounded-md bg-dark bg-opacity-90 px-3 shadow-default lg:h-9'>
        {navlinks.map((navlink) => (
          <li key={navlink.id}>
            <NavLink
              href={navlink.href}
              active={activeSection === navlink.id}
              id={navlink.id}
              setActiveSection={setActiveSection}
            >
              {navlink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
