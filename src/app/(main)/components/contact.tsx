import Section from '@/components/section'
import Title from '@/components/title'
import React from 'react'
import Description from './description'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import ContactForm from './contact-form'

export default function Contact() {
  return (
    <Section id='contact' className='py-16 lg:py-0'>
      <div className='flex flex-col gap-4'>
        <Header>Contact</Header>
        <Description>
          Let&rsquo;s <span className='font-bold text-light'>get in touch</span>{' '}
          and build something great.
        </Description>
      </div>
      <div className='grid max-w-screen-lg lg:grid-cols-2'>
        <div className='flex flex-col gap-4 p-4 lg:p-8'>
          <Title>I&rsquo;d be glad to hear from you.</Title>
          <Description className='text-left'>
            Let’s connect! Whether you have an inquiry, a project idea, or just
            want to say hello. Feel free to fill out the form or get in touch
            directly via:
          </Description>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='https://api.whatsapp.com/send?phone=6281347580400&text=Hello%2C%20I%27d%20like%20to%20work%20with%20you!wa.link/o1758o'
              target='_blank'
              className='flex h-11 w-fit items-center gap-2 rounded-lg bg-light px-4 font-medium text-dark transition-all duration-300 ease-in-out hover:bg-light-hover'
            >
              <div className='relative h-6 w-6'>
                <Image
                  src='/contacts/whatsapp-dark.svg'
                  alt='contact icon'
                  fill
                />
              </div>
              Whatsapp
            </Link>
            <Link
              href='mailto:rach.syahputra@gmail.com?subject=Inquiry from personal website'
              target='_blank'
              className='flex h-11 w-fit items-center gap-2 rounded-lg bg-light px-4 font-medium text-dark transition-all duration-300 ease-in-out hover:bg-light-hover'
            >
              <div className='relative h-6 w-6'>
                <Image src='/contacts/mail-dark.svg' alt='contact icon' fill />
              </div>
              Email
            </Link>
            <Link
              href='https://www.linkedin.com/in/rachmat-syahputra/'
              target='_blank'
              className='flex h-11 w-fit items-center gap-2 rounded-lg bg-light px-4 font-medium text-dark transition-all duration-300 ease-in-out hover:bg-light-hover'
            >
              <div className='relative h-6 w-6'>
                <Image
                  src='/contacts/linkedin-dark.svg'
                  alt='contact icon'
                  fill
                />
              </div>
              Linkedin
            </Link>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
