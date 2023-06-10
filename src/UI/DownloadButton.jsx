import React from 'react'
import './DownloadButton.scss'

const DownloadButton = (props) => {
   const downloadHandler = () => {
      window.location.href =
         'https://drive.google.com/uc?id=1MLLe-8LxkWPh9zjIjQQgV8DXZGW5sknp&export=download'
   }

   return (
      <button
         className={`${props.className} button-style`}
         onClick={downloadHandler}
         href={props.href}
      >
         {props.children}
      </button>
   )
}

export default DownloadButton
