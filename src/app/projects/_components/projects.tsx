/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'

import contentfulClient from '@/contentful/contentful-client'
import { IContentfulAsset, TypeProjectsSkeleton } from '@/contentful/types'
import ProjectItem from '@/app/(main)/_components/project-item'
import ProjectItemSkeleton from '@/app/(main)/_components/project-item-skeleton'
import Header from '@/components/header'
import Section from '@/components/section'
import Description from '@/components/description'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Projects() {
  const [projects, setProjects] = useState<any[] | null>(null)

  const getProjects = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeProjectsSkeleton>({
        content_type: 'projects',
        order: ['-fields.id']
      })

      setProjects(
        res.items.map((item) => ({
          slug: item.fields.slug,
          title: item.fields.title,
          techStacks: item.fields.techStacks,
          description: item.fields.description,
          images: item.fields.images.map(
            (image) => `https:${(image as IContentfulAsset)?.fields.file.url}`
          ),
          link: item.fields.link
        }))
      )
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <Section id='projects' className='py-8 lg:gap-24 lg:py-16'>
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
      <div className='flex flex-col gap-4'>
        <Header>Projects</Header>
        <Description>
          Showcase of my <span className='font-bold text-light'>artistic</span>{' '}
          projects that I&rsquo;m proud of.
        </Description>
      </div>

      <div className='flex w-full flex-col gap-8 lg:gap-16 xl:gap-24'>
        {projects && projects.length > 0 ? (
          projects?.map((project) => (
            <ProjectItem key={project.slug} {...project} />
          ))
        ) : (
          <>
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
          </>
        )}
      </div>
    </Section>
  )
}
