import React from 'react'
import Section from '@/components/section'
import Header from '@/components/header'
import Description from './description'
import TestimonialCard from './testimonial-card'
import { testimonials } from '@/lib/data/testimonials'

export default function Testimonials() {
  return (
    <Section id='testimonials' className='py-8 lg:py-16'>
      <div className='flex flex-col gap-4'>
        <Header>Testimonials</Header>
        <Description>
          <span className='font-bold text-light'>Kind words</span> from those
          I’ve had the privilege to work with
        </Description>
      </div>

      <div className='grid max-w-screen-lg gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </Section>
  )
}
