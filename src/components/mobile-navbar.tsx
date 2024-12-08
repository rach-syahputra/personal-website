'use client'

import { navlinks } from '@/lib/data/navlinks'
import { cn } from '@/lib/utils'
import {
  BriefcaseBusiness,
  ChevronDown,
  FolderCode,
  Home,
  User,
  Wrench
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileNavbar() {
  const [toggle, setToggle] = useState<boolean>(false)

  const icons: Record<string, React.JSX.Element> = {
    home: <Home color='#888888' size={18} />,
    about: <User color='#888888' size={18} />,
    skills: <Wrench color='#888888' size={18} />,
    projects: <FolderCode color='#888888' size={18} />,
    experiences: <BriefcaseBusiness color='#888888' size={18} />
  }

  return (
    <div className='fixed right-4 top-4 z-10 inline-flex flex-col items-end gap-4 md:right-8 md:top-8 lg:hidden'>
      <button
        className='flex h-10 w-fit items-center justify-center gap-2 rounded-md bg-dark-hover px-4'
        onClick={() => setToggle(!toggle)}
      >
        <span className='font-medium text-light'>Menu</span>
        {toggle ? (
          <ChevronDown
            color='#888888'
            size={18}
            className='rotate-180 transition-all duration-300 ease-in-out'
          />
        ) : (
          <ChevronDown
            color='#888888'
            size={18}
            className='transition-all duration-300 ease-in-out'
          />
        )}
      </button>
      {toggle && (
        <ul
          className={cn(
            'w-fit rounded-md bg-dark-hover transition-all duration-300 ease-in-out'
          )}
        >
          {navlinks?.map((navlink) => (
            <li key={navlink.id}>
              <Link
                href={navlink.href}
                className='flex h-14 items-center gap-4 px-6'
                onClick={() => setToggle(false)}
              >
                {icons[navlink.id]}
                <span className='font-medium text-light'>{navlink.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
