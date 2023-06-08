import React from 'react'
import './DownloadButton.scss'

const DownloadButton = (props) => {
   return (
      <button
         className={`${props.className} button-style`}
         onClick={props.onClick}
         href={props.href}
      >
         {props.children}
      </button>
   )
}

export default DownloadButton
