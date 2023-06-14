import React from 'react'
import './DownloadButton.scss'
import { motion } from 'framer-motion'

const DownloadButton = (props) => {
   const downloadHandler = () => {
      window.location.href =
         'https://drive.google.com/uc?id=1MLLe-8LxkWPh9zjIjQQgV8DXZGW5sknp&export=download'
   }

   return (
      <motion.button
         className={`${props.className} button-style`}
         onClick={downloadHandler}
         href={props.href}
         whileHover={{
            scale: 1.05,
            background:
               'linear-gradient(152deg, rgba(243,75,44,1) 0%, rgba(213,206,71,1) 100%)',
            color: '#222324',
         }}
      >
         {props.children}
      </motion.button>
   )
}

export default DownloadButton
