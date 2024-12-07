import React from 'react'
import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'

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
          I build modern web application to{' '}
          <span className='font-bold text-light'>solve users problem</span>.
          However, as a music enthusiast, Building music platforms is where my
          passion truly shines, as it allows me to combine my love for music
          with my web development skills to create something enjoyable.
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
      </div>
    </Section>
  )
}
