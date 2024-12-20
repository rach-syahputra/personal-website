/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import contentfulClient from '@/contentful/contentful-client'
import { IContentfulAsset, TypeProjectsSkeleton } from '@/contentful/types'
import Button from '@/components/button'
import Header from '@/components/header'
import HorizontalLine from '@/components/horizontal-line'
import Explanation from './explanation'
import Responsibilities from './responsibilites'
import TechStacks from './tech-stacks'
import Screenshots from './screenshots'
import Sidebar from './sidebar'

interface ProjectDetailProps {
  slug: string
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const [project, setProject] = useState<any | null>(null)

  const getProject = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeProjectsSkeleton>({
        content_type: 'projects',
        'fields.slug': slug
      })

      setProject({
        ...res.items[0].fields,
        screenshots: res.items[0].fields.screenshots.map(
          (screenshot) =>
            `https:${(screenshot as IContentfulAsset)?.fields.file.url}`
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <div className='flex flex-col gap-8'>
      {project ? (
        <>
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
              <p className='w-full text-left text-gray'>
                {project?.description}
              </p>
              <Link href={project?.link || '#'} target='_blank'>
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
                <Responsibilities
                  title={project?.title}
                  responsibilities={project?.responsibilities}
                />
                <TechStacks>
                  <ul className='flex flex-col gap-4'>
                    {project?.techStacks?.map(
                      (
                        techStack: {
                          name: string
                        },
                        index: number
                      ) => (
                        <li key={index} className='flex items-center gap-4'>
                          <div className='h-1.5 w-1.5 rounded-full bg-gray'></div>
                          {techStack.name}
                        </li>
                      )
                    )}
                  </ul>
                </TechStacks>
                <Screenshots screenshots={project?.screenshots || []} />
              </div>
            </div>
            <Sidebar />
          </main>
        </>
      ) : (
        <p className='text-lg font-bold text-gray lg:text-xl'>
          Collecting project data...
        </p>
      )}
    </div>
  )
}
