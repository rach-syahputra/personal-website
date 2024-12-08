import React from 'react'
import Header from '@/components/header'
import Section from '@/components/section'
import Description from './description'
import ExperienceItem from './experience-item'
import { experiences } from '@/lib/data/experiences'

export default function Experiences() {
  return (
    <Section id='experiences' className='gap-16 py-16'>
      <div className='flex flex-col gap-4'>
        <Header>Experiences</Header>
        <Description>
          Milestones from my experiences that have defined my{' '}
          <span className='font-bold text-light'>career path</span> so far.
        </Description>
      </div>
      <div className='flex flex-col gap-16 lg:gap-24'>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </Section>
  )
}
