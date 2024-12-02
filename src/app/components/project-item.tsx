import Badge from '@/components/badge'
import Button from '@/components/button'
import Description from '@/components/description'
import ImageCollage from '@/components/image-collage'
import Title from '@/components/title'
import { Colors, Images } from '@/lib/types'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectItemProps {
  project: {
    title: string
    images: Images
    techStacks: {
      name: string
      color: Colors
    }[]
    description: string
    link: {
      live: string
      code: string
    }
  }
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { title, images, techStacks, description, link } = project

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex w-full flex-col items-center justify-center gap-8 py-4'>
        <Title className='lg:hidden'>{title}</Title>
        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <ImageCollage images={images} />
            <div className='xs:w-full flex w-[300px] max-w-[380px] flex-wrap items-center justify-center gap-2 lg:w-[500px] lg:max-w-full'>
              {techStacks.map((techStack, index) => (
                <Badge key={index} color={techStack.color}>
                  {techStack.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 py-2 lg:items-start lg:justify-between'>
            <div className='flex flex-col gap-4'>
              <Title className='hidden lg:block'>{title}</Title>
              <Description className='lg:text-left'>{description}</Description>
            </div>
            <div className='flex gap-4'>
              <Link href={link.live}>
                <Button className='group flex items-center justify-center gap-2'>
                  Live Site{' '}
                  <ArrowUpRight
                    size={16}
                    className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Button>
              </Link>
              <Link href={link.code}>
                <Button
                  variant='secondary'
                  className='group flex items-center justify-center gap-2'
                >
                  Source Code{' '}
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
