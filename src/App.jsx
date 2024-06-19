import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'

const App = () => {
  return (
    <main className='relative min-h-screen w-full font-sans text-zinc-950 z-0'>
      <Nav />
      <Hero />
      <About />
    </main>
  )
}

export default App
