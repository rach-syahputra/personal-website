import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import { Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <Section id='home' className='relative py-32 lg:h-screen lg:py-0'>
      <Header>I&rsquo;m Rachmat Syahputra</Header>
      <Description className='px-8'>
        A full-stack web developer who works with JavaScript Ecosystem and
        presents <span className='text-white'>high-quality</span> modern web
        application.
      </Description>
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
