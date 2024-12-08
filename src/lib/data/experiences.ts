export interface IExperience {
  companyName: string
  jobTitle: string
  startYear: string
  endYear: string
  responsibilities: string[]
}

export const experiences: IExperience[] = [
  {
    companyName: 'Company name',
    jobTitle: 'Software Engineer',
    startYear: '2022',
    endYear: '2023',
    responsibilities: [
      'Designed and developed responsive web applications using Next.js.',
      'Built and integrated RESTful APIs to manage data and enhance functionality.',
      'Deployed and maintained applications on Vercel.'
    ]
  },
  {
    companyName: 'Company name',
    jobTitle: 'Software Engineer',
    startYear: '2022',
    endYear: '2023',
    responsibilities: [
      'Designed and developed responsive web applications using Next.js.',
      'Built and integrated RESTful APIs to manage data and enhance functionality.',
      'Deployed and maintained applications on Vercel.'
    ]
  }
]
