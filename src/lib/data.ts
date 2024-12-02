import { Colors, Images } from './types'

interface IProjects {
  id: number
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

export const projects: IProjects[] = [
  {
    id: 1,
    title: 'Taskly',
    images: ['/688.png', '/688.png', '/688.png'],
    techStacks: [
      {
        name: 'Typescript',
        color: 'blue'
      },
      {
        name: 'NextJS',
        color: 'default'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      }
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut ad perspiciatis eveniet ea iusto incidunt at quo quas omnis.',
    link: {
      live: '#',
      code: '#'
    }
  },
  {
    id: 2,
    title: 'Taskly',
    images: ['/688.png', '/688.png', '/688.png'],
    techStacks: [
      {
        name: 'Typescript',
        color: 'blue'
      },
      {
        name: 'NextJS',
        color: 'default'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      }
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut ad perspiciatis eveniet ea iusto incidunt at quo quas omnis.',
    link: {
      live: '#',
      code: '#'
    }
  }
]
