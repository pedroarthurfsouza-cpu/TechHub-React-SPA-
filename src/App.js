import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>

      <Navbar />
      <Home />
      <About />
      <Cards />
      <Footer />
    </div>
  )
}

export default App