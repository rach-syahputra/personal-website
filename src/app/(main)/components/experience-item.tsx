import React from 'react'
import Title from '@/components/title'
import { IExperience } from '@/lib/data/experiences'

export default function ExperienceItem({
  companyName,
  jobTitle,
  startYear,
  endYear,
  responsibilities
}: IExperience) {
  return (
    <div className='flex w-full gap-4 lg:max-w-screen-md lg:gap-8'>
      <div className='h-auto w-2 bg-primary'></div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <Title>{companyName}</Title>
          <p className='text-light'>{jobTitle}</p>
          <p className='text-gray'>
            {startYear} - {endYear}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-light'>Responsibilities</h3>
          <ul className='flex flex-col gap-2'>
            {responsibilities.map((responsibility, index) => (
              <li key={index} className='flex gap-4'>
                <div className='py-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-gray'></div>
                </div>
                <p className='text-sm text-gray md:text-base'>
                  {responsibility}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
