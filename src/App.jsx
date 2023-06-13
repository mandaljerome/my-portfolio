import { Fragment } from 'react'
import './App.scss'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Educational from './components/Educational'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
   return (
      <div className='App'>
         <Hero />
         <Educational />
         <Projects />
         <Expertise />
         <Footer />
      </div>
   )
}

export default App
