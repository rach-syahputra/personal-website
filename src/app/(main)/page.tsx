import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Skills from './components/skills'
import Experiences from './components/experiences'
import Testimonials from './components/testimonials'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Testimonials />
      <Contact />
    </main>
  )
}
