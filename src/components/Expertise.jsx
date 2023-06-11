import React from 'react'
import './Expertise.scss'
import './Educational.scss'

const Expertise = () => {
   return (
      <div className='expertise'>
         <div className='container-xl'>
            <h3>Expertise</h3>

            <div className='expertise-cards'>
               <div className='card card-one'>
                  <img
                     src='../../public/assets/web-design.svg'
                     alt='web-design'
                  />
                  <h3>UI/UX Design</h3>
                  <p>
                     Experienced UI/UX professional with a proven track record
                     in designing intuitive and visually appealing interfaces,
                     delivering exceptional user experiences, and collaborating
                     effectively with cross-functional teams.
                  </p>
               </div>

               <div className='card card-two'>
                  <img
                     src='../../public/assets/graphic-design.svg'
                     alt='web-design'
                  />
                  <h3>Graphic Design</h3>
                  <p>
                     Skilled graphic designer with a strong portfolio showcasing
                     creative designs, expertise in visual communication, and a
                     proven ability to deliver impactful solutions that align
                     with client goals and brand aesthetics.
                  </p>
               </div>

               <div className='card card-three'>
                  <img
                     src='../../public/assets/web-development.svg'
                     alt='web-design'
                  />
                  <h3>Web Development</h3>
                  <p>
                     Front-end developer with expertise in HTML, CSS,
                     JavaScript, React and different libraries or framework.
                     Strong experience in building responsive and interactive
                     web interfaces, and collaborating effectively in
                     cross-functional teams.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expertise
