import React from 'react'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Work/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
