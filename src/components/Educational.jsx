import React from 'react'
import './Educational.scss'
import { motion } from 'framer-motion'
import DownloadButton from '../UI/DownloadButton'

const Educational = () => {
   const iconVariants = {
      whileHover: {
         color: '#F34B2C',
         scale: 1.2,
         y: -5,
      },
   }

   return (
      <div className='educational'>
         <div className='container-xl'>
            <div className='about-section'>
               <h3>About</h3>
               <p>
                  Creative and interdisciplinary package designer with 7+ years
                  of experience in the tech industry. Possesses a high degree of
                  competence in 2D, 3D, UI/UX, and web design. Coachable and
                  passionate about collaborating with a team when working on
                  projects. I am a goal-oriented, self-motivated, responsible,
                  and hard-working person. I am keen to obtain new skills and
                  training, have a flexible approach to all work situations, and
                  find it easy to adapt. I loved spending my free time learning
                  new skills every day.
               </p>
            </div>
            <div className='educational-attainment'>
               <h3>Educational Attainment</h3>
               <h5>Bachelor of Science in Computer Science</h5>
               <p>Systems Plus College Foundation - Batch 2017</p>
               <a href=''>www.spcf.edu.ph</a>
               <p>To learn more about me click the buttons below.</p>

               <div className='buttons'>
                  <DownloadButton className='download-cv'>
                     <i className='fa-solid fa-file-arrow-down'></i>DOWNLOAD CV
                  </DownloadButton>
                  <motion.i
                     className='fa-brands fa-square-facebook'
                     variants={iconVariants}
                     whileHover='whileHover'
                  ></motion.i>
                  <motion.i
                     className='fa-brands fa-instagram'
                     variants={iconVariants}
                     whileHover='whileHover'
                  ></motion.i>
                  <motion.i
                     className='fa-brands fa-linkedin-in'
                     variants={iconVariants}
                     whileHover='whileHover'
                  ></motion.i>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Educational
