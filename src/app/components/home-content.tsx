import { Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import VerticalLine from '@/components/vertical-line'

export default function HomeContent() {
  return (
    <Section id='home' className='relative py-32 lg:h-screen lg:py-0'>
      <VerticalLine animationDelay='1000' />
      <Header>I&rsquo;m Rachmat Syahputra</Header>
      <VerticalLine animationDelay='1050' />
      <Description className='px-8'>
        A full-stack web developer who work with JavaScript Ecosystem and
        present <span className='text-white'>high-quality</span> modern web
        application.
      </Description>
      <VerticalLine animationDelay='1100' />
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
