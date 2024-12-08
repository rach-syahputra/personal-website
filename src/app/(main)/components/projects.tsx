import Description from '../components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import ProjectItem from './project-item'
import { projects } from '@/lib/data/projects'

export default function Projects() {
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
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}
