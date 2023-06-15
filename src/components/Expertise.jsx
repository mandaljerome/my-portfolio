import React from 'react'
import './Expertise.scss'
import './Educational.scss'
import images from './expertise-images'

const Expertise = () => {
   const {
      graphicDesign,
      webDesign,
      webDevelopment,
      bs,
      css,
      figma,
      html,
      ai,
      id,
      js,
      ks,
      ps,
      react,
      sass,
      sku,
      sql,
      ts,
      wf,
      wp,
      xd,
   } = images

   return (
      <div className='expertise'>
         <div className='container-xl'>
            <h3>Expertise</h3>

            <div className='expertise-cards'>
               <div className='card card-three'>
                  <img src={webDevelopment} alt='web-design' />
                  <h3>Web Development</h3>
                  <p>
                     Front-end developer with expertise in HTML, CSS,
                     JavaScript, React and different libraries or framework.
                     Strong experience in building responsive and interactive
                     web interfaces, and collaborating effectively in
                     cross-functional teams.
                  </p>
               </div>

               <div className='card card-one'>
                  <img src={webDesign} alt='web-design' />
                  <h3>UI/UX Design</h3>
                  <p>
                     Experienced UI/UX professional with a proven track record
                     in designing intuitive and visually appealing interfaces,
                     delivering exceptional user experiences, and collaborating
                     effectively with cross-functional teams.
                  </p>
               </div>

               <div className='card card-two'>
                  <img src={graphicDesign} alt='web-design' />
                  <h3>Graphic Design</h3>
                  <p>
                     Skilled graphic designer with a strong portfolio showcasing
                     creative designs, expertise in visual communication, and a
                     proven ability to deliver impactful solutions that align
                     with client goals and brand aesthetics.
                  </p>
               </div>
            </div>

            <hr />

            <div className='icons'>
               <img src={html} alt='html' />
               <img src={css} alt='css' />
               <img src={sass} alt='sass' />
               <img src={bs} alt='bs' />
               <img src={js} alt='js' />
               <img src={ts} alt='ts' />
               <img src={react} alt='react' />
               <img src={sql} alt='sql' />
               <img src={wp} alt='wp' />
               <img src={wf} alt='wf' />
               <img src={figma} alt='figma' />
               <img src={xd} alt='xd' />
               <img src={ps} alt='ps' />
               <img src={ai} alt='ai' />
               <img src={id} alt='id' />
               <img src={sku} alt='sku' />
               <img src={ks} alt='ks' />
            </div>
         </div>
      </div>
   )
}

export default Expertise
