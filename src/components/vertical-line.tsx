import React from 'react'

// the animation is generated using css in global.css

export default function VerticalLine({
  animationDelay
}: {
  animationDelay: '1000' | '1050' | '1100'
}) {
  return (
    <div className='relative w-full'>
      <hr className='vertical-line' />
      <hr
        className={`vertical-line-animation animation-delay-${animationDelay}`}
      />
    </div>
  )
}
