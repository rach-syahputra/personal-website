import React from 'react'
import Image from 'next/image'
import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import { skills } from '@/lib/data/skills'

export default function About() {
  return (
    <Section id='about'>
      <div className='flex w-full flex-col items-center justify-center gap-8'>
        <Header>About Me</Header>
        <Description>
          Hi, you can call me{' '}
          <span className='font-bold text-light'>Rachmat</span>. I was born in
          1999 in East Borneo, Indonesia. I am passionate about web development.
          I started learning web development in late 2023. I see web development
          as a unique blend of mathematics and artistry, which requiring logical
          thinking, problem-solving skills, and a keen eye for design aesthetics
          and creativity.
        </Description>

        <Description>
          I am currently enhancing my expertise in full-stack web development at{' '}
          <span className='font-bold text-light'>
            Purwadhika Digital Technology School
          </span>
          . Proudly building practical skills through real-world projects and
          collaborative learning, I thrive in team environments where ideas are
          shared, and solutions are crafted together.
        </Description>

        <div className='flex w-full flex-col items-center justify-center gap-4'>
          <Description>
            Here are my current favorite{' '}
            <span className='font-bold text-light'>tech stacks</span>:
          </Description>
          <ul className='flex flex-wrap items-center justify-center gap-6'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='relative flex h-8 w-8 flex-col items-center justify-center transition-all duration-300 ease-in-out lg:h-10 lg:w-10'
              >
                <Image src={skill.src} alt='skill icon' fill />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
