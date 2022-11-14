import React from 'react'
import './widgets.scss'
const Widget = ({type}) => {



  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>Title</span>
        <span className='counter'>count</span>
        <span className='link'>Details...</span>
      </div>
      <div className="right">right</div>
    </div>
  )
}

export default Widget