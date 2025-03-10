import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Description from './description'
import Header from '@/components/header'
import Section from '@/components/section'
import HorizontalLine from '@/components/horizontal-line'

export default function Hero() {
  return (
    <Section id='home' className='relative lg:pt-8'>
      <div className='relative h-36 w-36 overflow-hidden rounded-full bg-dark-hover bg-opacity-10 shadow-photo lg:h-[200px] lg:w-[200px]'>
        <Image
          src='/professional-photo.webp'
          alt='professional photo'
          fill
          quality={50}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Description>Hello, my name is</Description>
        <Header>Rachmat Syahputra</Header>
      </div>

      <HorizontalLine animationDelay='1050' />

      <Description className='px-8'>
        I am a{' '}
        <span className='font-bold text-light'>full-stack web developer</span>{' '}
        who work with JavaScript Ecosystem and present high-quality modern web
        application.
      </Description>
      <HorizontalLine animationDelay='1100' />
      <div className='flex gap-8 md:gap-6'>
        <Link
          href='https://github.com/rach-syahputra/'
          aria-label="Go to Rachmat's github profile"
          target='_blank'
        >
          <Github color='#888888' size={28} className='lg:hidden' />
          <Github color='#888888' size={32} className='hidden lg:block' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/rachmat-syahputra/'
          aria-label="Go to Rachmat's linkedin profile"
          target='_blank'
        >
          <Linkedin color='#888888' size={28} className='lg:hidden' />
          <Linkedin color='#888888' size={32} className='hidden lg:block' />
        </Link>
        <Link
          href='https://www.instagram.com/rach.syahputra/'
          aria-label="Go to Rachmat's instagram profile"
          target='_blank'
        >
          <Instagram color='#888888' size={28} className='lg:hidden' />
          <Instagram color='#888888' size={32} className='hidden lg:block' />
        </Link>
      </div>
    </Section>
  )
}
