import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
