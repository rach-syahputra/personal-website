'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [message, setMessage] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    window.open(
      `mailto:rach.syahputra@gmail.com?subject=Inquiry from personal website &body=${message}`,
      '_blank'
    )
  }

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className='flex flex-col gap-4 p-4 lg:p-8'
    >
      <div className='flex flex-col gap-4'>
        <label htmlFor='message' className='font-bold text-light'>
          How can I help?
        </label>
        <textarea
          id='message'
          placeholder='Your needs'
          rows={8}
          value={message}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(event.target.value)
          }
          className='resize-none rounded-md bg-dark p-2 shadow-default focus:outline-gray focus-visible:outline-offset-1'
        />
      </div>
      <button className='flex h-11 items-center justify-center rounded-lg bg-light px-4 text-center font-medium text-dark transition-all duration-300 ease-in-out hover:bg-light-hover'>
        Send message
      </button>
    </form>
  )
}
