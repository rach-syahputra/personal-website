import React from 'react'
import Description from './description'

export default function Responsibilities({
  title,
  responsibilities
}: {
  title: string
  responsibilities: string[]
}) {
  return (
    <section id='responsibilities' className='flex flex-col gap-4'>
      <div className='flex h-8 items-center gap-4'>
        <div className='h-full w-1 bg-primary'></div>
        <h2 className='text-xl font-bold lg:text-2xl'>Responsibilities</h2>
      </div>
      <Description className='flex flex-col gap-4'>
        <p>
          In building {title}, I took on the following key responsibilities to
          ensure its success:
        </p>
        <ul className='flex flex-col gap-4'>
          {responsibilities?.map((responsibility, index) => (
            <li key={index} className='flex gap-4'>
              <div className='py-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-gray'></div>
              </div>
              {responsibility}
            </li>
          ))}
        </ul>
      </Description>
    </section>
  )
}
