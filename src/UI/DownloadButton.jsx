import React from 'react'
import './DownloadButton.scss'
import { motion } from 'framer-motion'

const DownloadButton = (props) => {
   const downloadHandler = () => {
      window.location.href =
         'https://drive.google.com/uc?id=1Q_aeZZsH912M1LdlsdtxXjFdCNdjquWp&export=download'
   }

   return (
      <motion.button
         className={`${props.className} button-style`}
         onClick={downloadHandler}
         href={props.href}
         variants={props.variants}
         whileHover={{
            scale: 1.05,
            color: '#222324',
         }}
      >
         {props.children}
      </motion.button>
   )
}

export default DownloadButton
