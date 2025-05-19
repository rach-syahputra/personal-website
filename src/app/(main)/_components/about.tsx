import React from 'react'
import Link from 'next/link'
import Description from './description'
import Header from '@/components/header'
import Section from '@/components/section'

export default function About() {
  return (
    <Section id='about' className='pb-8'>
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
          <span className='font-bold text-light'>solve users problem</span>. I
          graduated from{' '}
          <Link
            href='https://www.purwadhika.com/'
            target='_blank'
            className='font-bold text-light hover:underline'
          >
            Purwadhika Digital Technology School
          </Link>
          , where I gained real-world experience through hands-on projects and
          teamwork. I enjoy turning ideas into useful products and working with
          others to solve real problems.
        </Description>
      </div>
    </Section>
  )
}
