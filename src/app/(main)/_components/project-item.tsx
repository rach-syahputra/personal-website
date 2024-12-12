import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Badge from './badge'
import Description from './description'
import Button from '@/components/button'
import Title from '@/components/title'
import ImageCollage from './image-collage'
import { IProject } from '@/lib/data/projects'

export default function ProjectItem(project: IProject) {
  const { id, title, images, techStacks, description, link } = project

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full flex-col items-center justify-center gap-8 py-4 xl:items-start'>
        <Title className='xl:hidden'>{title}</Title>
        <div className='flex flex-col items-center justify-center gap-4 xl:flex-row xl:gap-8'>
          <ImageCollage images={images} />
          <div className='flex flex-1 flex-col items-center justify-center gap-4 xl:h-[290px] xl:items-start xl:justify-between'>
            <div className='flex flex-col items-center justify-center gap-4 xl:items-start'>
              <Title className='hidden xl:block'>{title}</Title>
              <div className='xs-w-full flex w-[300px] max-w-[380px] flex-wrap items-center justify-center gap-2 xs:w-full lg:max-w-full xl:justify-start'>
                {techStacks.map((techStack, index) => (
                  <Badge key={index} color={techStack.color}>
                    {techStack.name}
                  </Badge>
                ))}
              </div>
              <Description className='xl:text-left'>{description}</Description>
            </div>
            <div className='flex gap-4'>
              <Link href={link.live} target='_blank'>
                <Button className='group flex items-center justify-center gap-2'>
                  Live Site{' '}
                  <ArrowUpRight
                    size={16}
                    className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Button>
              </Link>
              <Link href={`projects/${id}`}>
                <Button
                  variant='secondary'
                  className='group flex items-center justify-center gap-2'
                >
                  Project Detail{' '}
                  <ArrowUpRight
                    size={16}
                    className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
