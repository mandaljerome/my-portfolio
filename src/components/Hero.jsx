import React from 'react'
import './Hero.scss'

const Hero = (props) => {
   return (
      <div className='hero'>
         <div className='container-xl'>
            <div className='hero-image'>
               <img src='../public/assets/hero-image.png' alt='formal-image' />
            </div>

            <div className='hero-details'>
               <button className='download-cv'>
                  <i className='fa-solid fa-file-arrow-down'></i>DOWNLOAD CV
               </button>
               <img
                  src='../public/assets/logo.svg'
                  alt='logo'
                  className='logo'
               />
               <div className='title'>
                  <h1>
                     JEROME. <span className='lastname'>MANDAL</span>
                  </h1>
                  <h3>FRONT-END DEVELOPER | UI/UX DESIGNER</h3>
               </div>
               <p>
                  High level experience in web and graphic design, possess a
                  unique set of skills and expertise that make an invaluable
                  asset to any organization.
               </p>
               <div className='hero-link'>
                  <span>Checkout my portfolio</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
