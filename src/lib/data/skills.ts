export interface ISkill {
  title: string
  description: string
  techStacks: {
    name: string
    icon: string
  }[]
}

export const skills: ISkill[] = [
  {
    title: 'Front-End',
    description:
      'These are the tools I use to build user interfaces and design experiences:',
    techStacks: [
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg'
      },
      {
        name: 'React',
        icon: '/skills/react.svg'
      },
      {
        name: 'Redux',
        icon: '/skills/redux.svg'
      },
      {
        name: 'TailwindCSS',
        icon: '/skills/tailwindcss.svg'
      },
      {
        name: 'Vite',
        icon: '/skills/vite.svg'
      },
      {
        name: 'Next.js',
        icon: '/skills/nextdotjs.svg'
      }
    ]
  },
  {
    title: 'Back-End',
    description: 'Here’s what I use to handle server-side logic and databases:',
    techStacks: [
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg'
      },
      {
        name: 'Node.js',
        icon: '/skills/nodejs.svg'
      },
      {
        name: 'MySQL',
        icon: '/skills/mysql.svg'
      },
      {
        name: 'PostgreSQL',
        icon: '/skills/postgresql.svg'
      },
      {
        name: 'Supabase',
        icon: '/skills/supabase.svg'
      },
      {
        name: 'Prisma',
        icon: '/skills/prisma.svg'
      }
    ]
  },
  {
    title: 'Other Tools',
    description:
      'These tools help me work efficiently and manage my projects effectively:',
    techStacks: [
      {
        name: 'Github',
        icon: '/skills/github.svg'
      },
      {
        name: 'Jest',
        icon: '/skills/jest.svg'
      },
      {
        name: 'Figma',
        icon: '/skills/figma.svg'
      },
      {
        name: 'Postman',
        icon: '/skills/postman.svg'
      }
    ]
  }
]
