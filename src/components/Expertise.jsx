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

            <hr />

            <div className='icons'>
               <img src='../../public/assets/icons/HTML5.svg' alt='html' />
               <img src='../../public/assets/icons/CSS3.svg' alt='css' />
               <img src='../../public/assets/icons/SASS.svg' alt='sass' />
               <img src='../../public/assets/icons/Bootstrap.svg' alt='bs' />
               <img src='../../public/assets/icons/Javascript.svg' alt='js' />
               <img src='../../public/assets/icons/Typescript.svg' alt='ts' />
               <img src='../../public/assets/icons/React.svg' alt='react' />
               <img src='../../public/assets/icons/SQL.svg' alt='sql' />
               <img src='../../public/assets/icons/Wordpress.svg' alt='wp' />
               <img src='../../public/assets/icons/Webflow.svg' alt='wf' />
               <img src='../../public/assets/icons/Figma.svg' alt='figma' />
               <img src='../../public/assets/icons/xD.svg' alt='xd' />
               <img src='../../public/assets/icons/Photoshop.svg' alt='ps' />
               <img src='../../public/assets/icons/Illustrator.svg' alt='ai' />
               <img src='../../public/assets/icons/inDesign.svg' alt='id' />
               <img src='../../public/assets/icons/SketchUp.svg' alt='sku' />
               <img src='../../public/assets/icons/Keyshot.svg' alt='ks' />
            </div>
         </div>
      </div>
   )
}

export default Expertise
