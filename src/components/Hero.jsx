import React from 'react'
import { motion } from 'framer-motion'
import './Hero.scss'
import DownloadButton from '../UI/DownloadButton'

const Hero = (props) => {
   const animationVariants = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            duration: 0.6,
            staggerChildren: 0.5,
         },
      },
   }

   const itemVariants = {
      hidden: {
         opacity: 0,
      },
      show: {
         opacity: 1,
         transition: {
            duration: 0.5,
         },
      },
   }

   const iconVariants = {
      whileHover: {
         color: '#F34B2C',
         scale: 1.2,
         y: -5,
      },
   }

   return (
      <div className='hero'>
         <div className='container-xl'>
            <div className='hero-image'>
               <img src='../public/assets/hero-image.png' alt='formal-image' />
            </div>

            <motion.div
               className='hero-details'
               variants={animationVariants}
               initial='hidden'
               animate='show'
            >
               <DownloadButton className='download-cv'>
                  <i className='fa-solid fa-file-arrow-down'></i>DOWNLOAD CV
               </DownloadButton>
               <motion.img
                  src='../public/assets/logo.svg'
                  alt='logo'
                  className='logo'
                  variants={itemVariants}
               />
               <div className='title'>
                  <motion.h1 variants={itemVariants}>
                     JEROME.<span className='lastname'>MANDAL</span>
                  </motion.h1>
                  <motion.h3 variants={itemVariants}>
                     FRONT-END DEVELOPER | UI/UX DESIGNER
                  </motion.h3>
               </div>
               <motion.p variants={itemVariants}>
                  High level experience in web and graphic design, possess a
                  unique set of skills and expertise that make an invaluable
                  asset to any organization.
               </motion.p>
               <motion.div className='hero-link' variants={itemVariants}>
                  <span>Checkout my portfolio's</span>
                  <a
                     href='https://www.behance.net/mandaljerome'
                     target='_blank'
                  >
                     <motion.i
                        className='fa-brands fa-square-behance'
                        variants={iconVariants}
                        whileHover='whileHover'
                     ></motion.i>
                  </a>
                  <a href='https://github.com/mandaljerome' target='_blank'>
                     <motion.i
                        className='fa-brands fa-github'
                        variants={iconVariants}
                        whileHover='whileHover'
                     ></motion.i>
                  </a>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default Hero
