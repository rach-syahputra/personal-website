import React from 'react'
import Description from './description'

export default function TechStacks({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section id='techStacksUsed' className='flex flex-col gap-4'>
      <div className='flex h-8 items-center gap-4'>
        <div className='h-full w-1 bg-primary'></div>
        <h3 className='text-xl font-bold lg:text-2xl'>Tech Stacks Used</h3>
      </div>
      <Description>{children}</Description>
    </section>
  )
}
