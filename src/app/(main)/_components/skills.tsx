import React from 'react'
import Description from './description'
import Header from '@/components/header'
import Section from '@/components/section'
import SkillCard from './skill-card'
import { skills } from '@/lib/data/skills'

export default function Skills() {
  return (
    <Section id='skills' className='py-8'>
      <div className='flex flex-col gap-4'>
        <Header>Skills</Header>
        <Description>
          A display of the technical skills that{' '}
          <span className='font-bold text-light'>power</span> my projects and
          growth.
        </Description>
      </div>
      <div className='grid max-w-screen-lg gap-y-2 md:grid-cols-2 md:gap-x-2 md:gap-y-4 md:px-4 lg:grid-cols-3 lg:gap-4 lg:px-0'>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </Section>
  )
}
