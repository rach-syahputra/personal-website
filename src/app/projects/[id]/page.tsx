import Link from 'next/link'
import React from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Button from '@/components/button'
import Header from '@/components/header'
import HorizontalLine from '@/components/horizontal-line'
import Explanation from './components/explanation'
import Responsibilities from './components/responsibilites'
import TechStacks from './components/tech-stacks'
import Demo from './components/demo'
import Sidebar from './components/sidebar'
import { projects } from '@/lib/data/projects'

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((project) => project.id === id)

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <Link
          href='/'
          className='group relative flex items-center gap-2 text-gray transition-all duration-300 ease-in-out hover:underline lg:text-lg'
        >
          <ArrowLeft
            color='#888888'
            size={18}
            className='transition-all duration-300 ease-in-out group-hover:-translate-x-1'
          />
          Back to main page
        </Link>
        <div className='flex flex-col items-start gap-4'>
          <Header>{project?.title}</Header>
          <p className='w-full text-left text-gray'>{project?.description}</p>
          <Link href={project?.link.live || '#'} target='_blank'>
            <Button className='group flex items-center justify-center gap-2'>
              Live Site{' '}
              <ArrowUpRight
                size={16}
                className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              />
            </Button>
          </Link>
        </div>
      </div>
      <HorizontalLine animationDelay='1000' />
      <main
        id='projectDetail'
        className='relative grid gap-8 pb-8 lg:grid-cols-4'
      >
        <div className='col-span-3 flex w-full flex-col gap-8'>
          <div className='flex flex-col gap-12'>
            <Explanation>{project?.explanation}</Explanation>
            <Responsibilities>
              <p>
                In building {project?.title}, I took on the following key
                responsibilities to ensure its success:
              </p>
              <ul className='flex flex-col gap-4'>
                {project?.responsibilities?.map((responsibility, index) => (
                  <li key={index} className='flex gap-4'>
                    <div className='py-2'>
                      <div className='h-1.5 w-1.5 rounded-full bg-gray'></div>
                    </div>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </Responsibilities>
            <TechStacks>
              <ul className='flex flex-col gap-4'>
                {project?.techStacks?.map((techStack, index) => (
                  <li key={index} className='flex items-center gap-4'>
                    <div className='h-1.5 w-1.5 rounded-full bg-gray'></div>
                    {techStack.name}
                  </li>
                ))}
              </ul>
            </TechStacks>
            <Demo title={project?.title || ''} src={project?.demoSrc || ''} />
          </div>
        </div>
        <Sidebar />
      </main>
    </div>
  )
}
