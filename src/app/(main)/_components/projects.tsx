/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import contentfulClient from '@/contentful/contentful-client'
import { IContentfulAsset, TypeProjectsSkeleton } from '@/contentful/types'
import Description from './description'
import Header from '@/components/header'
import Section from '@/components/section'
import ProjectItem from './project-item'
import ProjectItemSkeleton from './project-item-skeleton'

export default function Projects() {
  const [projects, setProjects] = useState<any[] | null>(null)

  const getProjects = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeProjectsSkeleton>({
        content_type: 'projects',
        order: ['-fields.id'],
        limit: 10
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
