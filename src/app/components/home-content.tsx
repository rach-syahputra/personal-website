import Description from '@/components/description'
import Header from '@/components/header'
import { Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <section className='flex h-[500px] w-full flex-col items-center justify-center gap-8 px-8'>
      <Header>I&rsquo;m Rachmat Syahputra</Header>
      <Description className='max-w-xl text-center'>
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
    </section>
  )
}
