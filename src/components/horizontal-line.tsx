import React from 'react'

// the animation is generated using css in global.css

export default function HorizontalLine({
  animationDelay
}: {
  animationDelay: '1000' | '1050' | '1100'
}) {
  return (
    <div className='relative w-full'>
      <hr className='horizontal-line absolute left-[-2.5%] top-0 h-0.5 w-[105%] text-dark' />
      <hr
        className={`horizontal-line-animation animation-delay-${animationDelay} absolute left-[-2.5%] top-0 h-0.5 w-0 text-dark`}
      />
    </div>
  )
}
