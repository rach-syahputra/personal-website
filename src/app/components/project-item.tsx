import Badge from '@/components/badge'
import Button from '@/components/button'
import Description from '@/components/description'
import ImageCollage, { Images } from '@/components/image-collage'
import Title from '@/components/title'
import { Colors } from '@/lib/types'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectItemProps {
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

export default function ProjectItem({
  title,
  images,
  techStacks,
  description,
  link
}: ProjectItemProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col items-center justify-center gap-4 py-4'>
        <Title>{title}</Title>
        <ImageCollage images={images} />
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {techStacks.map((techStack) => (
            <Badge color={techStack.color}>{techStack.name}</Badge>
          ))}
        </div>
        <Description>{description}</Description>
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
  )
}
