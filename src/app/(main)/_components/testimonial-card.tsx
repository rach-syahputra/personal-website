import React from 'react'
import Image from 'next/image'
import { ITestimonial } from '@/lib/data/testimonials'
import { cn } from '@/lib/utils'

interface TestimonialProps extends ITestimonial {
  index: number
}

export default function TestimonialCard({
  jobTitle,
  client,
  index
}: TestimonialProps) {
  return (
    <article
      className={cn(
        'flex h-[300px] flex-col justify-between rounded-lg border border-dark-hover p-6 lg:h-[350px]',
        {
          'lg:mt-2 lg:-rotate-3': index === 0,
          'lg:mt-2 lg:rotate-3': index === 2
        }
      )}
    >
      <div className='flex flex-col gap-2'>
        <span className='text-sm uppercase text-gray'>AS A {jobTitle}</span>
        <p className='text-sm text-light lg:text-base'>{client.testimonial}</p>
      </div>
      <div className='flex gap-4'>
        <figure className='flex items-center justify-center gap-3'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image src={client.imgSrc} alt='client icon' fill />
          </div>
          <figcaption className='flex flex-col'>
            <span className='text-sm font-bold text-light'>{client.name}</span>
            <p className='text-xs text-gray'>
              {client.jobTitle} at {client.companyName}
            </p>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
