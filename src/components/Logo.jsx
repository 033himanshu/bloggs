import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className={`max-w-[${width}]`}><img src='./Logo.png'/></div>
    
  )
}

export default Logo