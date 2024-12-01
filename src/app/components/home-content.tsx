import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import { Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <Section>
      <Header>I&rsquo;m Rachmat Syahputra</Header>
      <Description>
        A full-stack web developer who works with JavaScript Ecosystem and
        presents <span className='text-white'>high-quality</span> modern web
        application.
      </Description>
      <div className='flex gap-6'>
        <Link href='#'>
          <Github color='#888888' />
        </Link>
        <Link href='#'>
          <Mail color='#888888' />
        </Link>
        <Link href='#'>
          <Instagram color='#888888' />
        </Link>
      </div>
    </Section>
  )
}
