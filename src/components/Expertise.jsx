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
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Aliquam animi accusantium, a quisquam sit sed.
                  </p>
               </div>

               <div className='card card-two'>
                  <img
                     src='../../public/assets/graphic-design.svg'
                     alt='web-design'
                  />
                  <h3>Graphic Design</h3>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Aliquam animi accusantium, a quisquam sit sed.
                  </p>
               </div>

               <div className='card card-three'>
                  <img
                     src='../../public/assets/web-development.svg'
                     alt='web-design'
                  />
                  <h3>Web Development</h3>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Aliquam animi accusantium, a quisquam sit sed.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expertise
