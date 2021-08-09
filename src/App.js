import React from 'react'
import Nav from './pages/Nav'
import About from './pages/About.js'

const App = () => {
  return (
    <>
    <header>
    <Nav />
    </header>
    <main>
    <div>
      <About />
    </div>
    <div>Projects</div>
    <div>Contact</div>
    </main>
    <footer>
    WORLD
    </footer>
    </>
  )
}

export default App
