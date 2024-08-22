import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
