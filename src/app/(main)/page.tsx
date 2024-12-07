import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Skills from './components/skills'

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
