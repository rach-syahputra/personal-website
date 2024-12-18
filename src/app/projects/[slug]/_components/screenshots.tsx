import Image from 'next/image'
import React from 'react'

interface ScreenshotProps {
  screenshots: string[]
}

export default function Screenshots({ screenshots }: ScreenshotProps) {
  return (
    <section id='screenshots' className='flex flex-col gap-4'>
      <div className='flex h-8 items-center gap-4'>
        <div className='h-full w-1 bg-primary'></div>
        <h3 className='text-xl font-bold lg:text-2xl'>App Screenshots</h3>
      </div>
      <div className='flex w-full flex-col gap-8'>
        {screenshots.length > 0 ? (
          screenshots.map((screenshot, index) => (
            <Image
              key={index}
              src={screenshot}
              alt='screenshot'
              width={768}
              height={576}
            />
          ))
        ) : (
          <p className='text-gray'>
            Sorry, the screenshots are currently not available.
          </p>
        )}
      </div>
    </section>
  )
}
