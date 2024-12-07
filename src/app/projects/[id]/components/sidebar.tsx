/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'

interface ISection {
  id: string
  name: string
}

export default function Sidebar() {
  const sections: ISection[] = [
    {
      id: 'explanation',
      name: 'Explanation'
    },
    {
      id: 'responsibilities',
      name: 'Responsibilities'
    },
    {
      id: 'techStacksUsed',
      name: 'Tech Stacks Used'
    },
    {
      id: 'appDemo',
      name: 'App Demo'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 128
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition
      })
    }
  }

  return (
    <div className='sticky top-8 hidden h-[50vh] rounded-md border border-dark-hover p-6 lg:block'>
      <ul className='flex flex-col gap-2'>
        {sections.map((section, index) => (
          <li
            key={index}
            className='cursor-pointer select-none text-sm text-gray hover:underline'
            onClick={() => scrollToSection(section.id)}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
