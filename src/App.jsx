import { Fragment } from 'react'
import './App.scss'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Educational from './components/Educational'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
   return (
      <div className='App'>
         <Hero />
         <Educational />
         <Expertise />
         <Footer />
      </div>
   )
}

export default App
