import Hero from './_components/hero'
import Projects from './_components/projects'
import About from './_components/about'
import Skills from './_components/skills'
import Contact from './_components/contact'

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
