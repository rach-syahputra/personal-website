import { Colors, Images } from '../types'

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
    images: [
      '/projects/taskly-sm.png',
      '/projects/taskly-md.png',
      '/projects/taskly-lg.png'
    ],
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
        name: 'React',
        color: 'blue'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      },
      {
        name: 'Shadcnui',
        color: 'red'
      }
    ],
    description: `An offline-friendly and minimalist todo-list web application that offers task management, with all data securely stored using the browser's localStorage.`,
    link: {
      live: 'https://taskly-minimalist-beta.vercel.app/',
      code: 'https://github.com/rach-syahputra/taskly'
    }
  },
  {
    id: 2,
    title: 'Gojek Landing Page Clone',
    images: [
      '/projects/gojek-sm.png',
      '/projects/gojek-md.png',
      '/projects/gojek-lg.png'
    ],
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
        name: 'React',
        color: 'blue'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      }
    ],
    description:
      'A clone of Gojek Super App Landing Page with responsive layout improved.',
    link: {
      live: 'https://gojek-landing-page-clone.vercel.app/',
      code: 'https://github.com/rach-syahputra/gojek-landing-page-clone'
    }
  },
  {
    id: 3,
    title: 'Harmoniqa',
    images: [
      '/projects/harmoniqa-sm.png',
      '/projects/harmoniqa-md.png',
      '/projects/harmoniqa-lg.png'
    ],
    techStacks: [
      {
        name: 'Typescript',
        color: 'blue'
      },
      {
        name: 'Supabase',
        color: 'green'
      },
      {
        name: 'NextJS',
        color: 'default'
      },
      {
        name: 'React',
        color: 'blue'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      }
    ],
    description:
      'An innovative music platform where user can discover, stream, and enjoy music uploaded by a vibrant community of creators and listeners.',
    link: {
      live: 'https://harmoniqa.vercel.app/',
      code: 'https://github.com/rach-syahputra/harmoniqa'
    }
  },
  {
    id: 4,
    title: 'CoDialogue',
    images: [
      '/projects/codialogue-sm.png',
      '/projects/codialogue-md.png',
      '/projects/codialogue-lg.png'
    ],
    techStacks: [
      {
        name: 'Javascript',
        color: 'yellow'
      },
      {
        name: 'React',
        color: 'blue'
      },
      {
        name: 'Redux',
        color: 'default'
      },
      {
        name: 'Vite',
        color: 'red'
      },
      {
        name: 'Tailwind',
        color: 'purple'
      },
      {
        name: 'Cypress',
        color: 'green'
      },
      {
        name: 'Storybook',
        color: 'red'
      }
    ],
    description:
      'Discussion forum web application for conversations across Programming categories. This project was built for "Become React Developer Expert" submission by Dicoding Academy',
    link: {
      live: 'https://codialogue-app.vercel.app/',
      code: 'https://github.com/rach-syahputra/codialogue'
    }
  }
]
