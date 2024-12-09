export type Colors = 'default' | 'blue' | 'purple' | 'yellow' | 'green' | 'red'
export type Images = [string, string, string]

export interface IProject {
  id: string
  title: string
  images: Images
  techStacks: {
    name: string
    color: Colors
  }[]
  description: string
  link: {
    live: string
    code?: string
  }
  explanation: string
  responsibilities: string[]
  screenshots: string[]
}

export const projects: IProject[] = [
  {
    id: 'taskly',
    title: 'Taskly',
    images: [
      '/projects/taskly-sm.webp',
      '/projects/taskly-md.webp',
      '/projects/taskly-lg.webp'
    ],
    techStacks: [
      {
        name: 'TypeScript',
        color: 'blue'
      },
      {
        name: 'Next.js',
        color: 'default'
      },
      {
        name: 'React',
        color: 'blue'
      },
      {
        name: 'TailwindCSS',
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
    },
    explanation:
      'Taskly empowers users to efficiently manage their daily tasks directly from their web browsers. Designed with simplicity in mind, this platform features a clean, minimalist design and a seamless user interface for an effortless experience. Taskly provides both light and dark themes, allowing users to customize their experience to suit their preferences. Taskly leverages localStorage to securely save tasks, ensuring data persistence without requiring a server. It’s the perfect tool for staying organized and productive, anytime and anywhere.',
    responsibilities: [
      'Designed and implemented the user interface with a focus on simplicity and user experience using Shadcnui and TailwindCSS.',
      'Developed core functionality for task management using TypeScript and localStorage for data persistence.',
      'Ensured cross-browser compatibility and responsive design for seamless use across devices.',
      'Managed the entire development lifecycle, from conceptualization to deployment.',
      'Deployed and hosted the application on Vercel, utilizing its seamless integration with Next.js for fast and efficient deployment.'
    ],
    screenshots: ['/projects/taskly-lg.webp', '/projects/taskly-dark-lg.webp']
  },
  {
    id: 'gojeks-landing-page-clone',
    title: "Gojek\'s Landing Page Clone",
    images: [
      '/projects/gojek-sm.webp',
      '/projects/gojek-md.webp',
      '/projects/gojek-lg.webp'
    ],
    techStacks: [
      {
        name: 'TypeScript',
        color: 'blue'
      },
      {
        name: 'Next.js',
        color: 'default'
      },
      {
        name: 'React',
        color: 'blue'
      },
      {
        name: 'TailwindCSS',
        color: 'purple'
      }
    ],
    description: "A pixel-perfect replica of Gojek's landing page.",
    link: {
      live: 'https://gojek-landing-page-clone.vercel.app/',
      code: 'https://github.com/rach-syahputra/gojek-landing-page-clone'
    },
    explanation:
      "The Gojek Landing Page Clone is a fully responsive replica of Gojek's official website landing page, meticulously crafted to match the original design with 100% accuracy. This project was built to enhance my skills in React and TailwindCSS, focusing on creating pixel-perfect designs and mastering modern web development practices. Through this project, I gained hands-on experience in slicing designs, implementing responsiveness, and working with advanced styling frameworks.",
    responsibilities: [
      "Cloned Gojek's landing page with a focus on achieving a pixel-perfect design.",
      'Developed a fully responsive layout to ensure optimal viewing experience across all devices.',
      'Utilized TailwindCSS for efficient styling.',
      'Applied React for component-based architecture to enhance maintainability and scalability.',
      'Managed project deployment and hosting, ensuring a smooth launch and ongoing updates.'
    ],
    screenshots: ['/projects/gojek-lg.webp']
  },
  {
    id: 'harmoniqa',
    title: 'Harmoniqa',
    images: [
      '/projects/harmoniqa-sm.webp',
      '/projects/harmoniqa-md.webp',
      '/projects/harmoniqa-lg.webp'
    ],
    techStacks: [
      {
        name: 'TypeScript',
        color: 'blue'
      },
      {
        name: 'Supabase',
        color: 'green'
      },
      {
        name: 'Next.js',
        color: 'default'
      },
      {
        name: 'React',
        color: 'blue'
      },
      {
        name: 'TailwindCSS',
        color: 'purple'
      }
    ],
    description:
      'An innovative music platform where user can discover, stream, and enjoy music uploaded by a vibrant community.',
    link: {
      live: 'https://harmoniqa.vercel.app/',
      code: 'https://github.com/rach-syahputra/harmoniqa'
    },
    explanation:
      'Harmoniqa is a music platform built with Next.js that allows users to upload, like, and listen to songs shared by others. Powered by Supabase for song storage and authentication, users can sign up using their email or GitHub account. Originally created to share and discover music among friends, the platform quickly evolved into a vision for a global community. Inspired by Spotify, Harmoniqa aims to create a space where users can share their favorite songs',
    responsibilities: [
      'Built music platform using Next.js',
      'Implemented Supabase for managing user authentication (email and GitHub sign-up) and securely storing song data',
      'Developed core features allowing users to upload, like, and listen to songs uploaded by others.',
      'Ensured responsive design and cross-browser compatibility for a consistent experience across devices.'
    ],
    screenshots: ['/projects/harmoniqa-lg.webp']
  },
  {
    id: 'codialogue',
    title: 'CoDialogue',
    images: [
      '/projects/codialogue-sm.webp',
      '/projects/codialogue-md.webp',
      '/projects/codialogue-lg.webp'
    ],
    techStacks: [
      {
        name: 'JavaScript',
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
        name: 'TailwindCSS',
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
      'Discussion forum web application for conversations across Programming categories.',
    link: {
      live: 'https://codialogue-app.vercel.app/',
      code: 'https://github.com/rach-syahputra/codialogue'
    },
    explanation:
      "CoDialogue is a forum web application built with React, designed for programming discussions. Users can interact with threads by adding comments, up-voting, and down-voting, while also viewing leaderboards and filtering threads by category. Developed as part of the 'Become React Developer Expert' submission by Dicoding Academy, CoDialogue uses a REST API provided by Dicoding to handle user data and forum content.",
    responsibilities: [
      'Developed the forum web application using React, focusing on building a clean and simple user interface for ease of use.',
      'Implemented Redux for state management, handling user authentication, and managing actions such as adding, commenting, and voting on threads.',
      'Integrated the REST API provided by Dicoding Academy to manage user data, thread content, and interactions.',
      'Designed and implemented the leaderboard feature to track and display the most active users based on their interactions.',
      'Enabled thread filtering by category, helping users easily navigate and find relevant discussions.',
      'Used Storybook to develop and test reusable UI components in isolation, ensuring consistent design across the app.',
      'Applied Cypress for end-to-end testing to verify the functionality and performance of the app across various user interactions.'
    ],
    screenshots: ['/projects/codialogue-lg.webp']
  }
]
