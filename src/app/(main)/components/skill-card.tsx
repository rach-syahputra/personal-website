'use client'

import Image from 'next/image'
import React from 'react'
import Title from '@/components/title'
import { ISkill } from '@/lib/data/skills'

export default function SkillCard({ title, description, techStacks }: ISkill) {
  return (
    <div className='rounded-lg border border-dark-hover p-2'>
      <div className='flex h-full w-full flex-col justify-between gap-8 rounded-md bg-dark-hover p-6'>
        <Title>{title}</Title>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-gray'>{description}</p>

          <div className='flex flex-1 flex-wrap gap-4'>
            {techStacks.map((techStack, index) => (
              <div
                key={index}
                className='group relative flex flex-col items-center justify-center'
              >
                <div className='h-6 w-6 lg:h-8 lg:w-8'>
                  <Image src={techStack.icon} alt='skill icon' fill />
                </div>
                <span className='invisible absolute -top-11 select-none rounded-full bg-dark px-3 py-2 text-sm opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:-translate-y-1 group-hover:opacity-100'>
                  {techStack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
