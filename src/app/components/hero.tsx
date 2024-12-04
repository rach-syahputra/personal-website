import { Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import Image from 'next/image'
import HorizontalLine from '@/components/horizontal-line'

export default function Hero() {
  return (
    <Section id='home' className='relative h-screen py-32 lg:py-0'>
      <div className='shadow-photo relative h-36 w-36 overflow-hidden rounded-full bg-dark-hover bg-opacity-10 lg:h-[200px] lg:w-[200px]'>
        <Image src='/professional-photo.png' alt='professional photo' fill />
      </div>
      <Header>I&rsquo;m Rachmat Syahputra</Header>
      <HorizontalLine animationDelay='1050' />

      <Description className='px-8'>
        A <span className='text-white'>full-stack web developer</span> who work
        with JavaScript Ecosystem and present high-quality modern web
        application.
      </Description>
      <HorizontalLine animationDelay='1100' />
      <div className='flex gap-6'>
        <Link href='https://github.com/rach-syahputra/' target='_blank'>
          <Github color='#888888' />
        </Link>
        <Link href='mailto:rach.syahputra@gmail.com' target='_blank'>
          <Mail color='#888888' />
        </Link>
        <Link href='https://www.instagram.com/rach.syahputra/' target='_blank'>
          <Instagram color='#888888' />
        </Link>
      </div>
    </Section>
  )
}
