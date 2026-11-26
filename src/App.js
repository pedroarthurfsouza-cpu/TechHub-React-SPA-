import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>

      <Navbar />
      <Home />
      <About />
      <Cards />
      <Footer />
    </div>
  )
}

export default App