import React from 'react'
import Description from './description'

export default function Explanation({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section id='explanation' className='flex flex-col gap-4'>
      <div className='flex h-8 items-center gap-4'>
        <div className='h-full w-1 bg-primary'></div>
        <h3 className='text-xl font-bold lg:text-2xl'>Explanation</h3>
      </div>
      <Description>{children}</Description>
    </section>
  )
}
