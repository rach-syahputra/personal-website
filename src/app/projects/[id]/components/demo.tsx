import React from 'react'

interface DemoProps {
  title: string
  src: string
}

export default function Demo({ title, src }: DemoProps) {
  return (
    <section id='appDemo' className='flex flex-col gap-4'>
      <div className='flex h-8 items-center gap-4'>
        <div className='h-full w-1 bg-primary'></div>
        <h3 className='text-xl font-bold lg:text-2xl'>App Demo</h3>
      </div>
      {src ? (
        <iframe
          src={src}
          title={`${title ? `${title} - Demo` : 'App Demo'}`}
          loading='lazy'
          className='h-[180px] w-[320px] xs:h-[213.75px] xs:w-[380px] md:h-[405px] md:w-[720px] lg:h-[432px] lg:w-[768px]'
        />
      ) : (
        <p className='text-gray'>Sorry, the demo is currently not available.</p>
      )}
    </section>
  )
}
