import React from 'react'
import { Navigate } from 'react-router';

const Signout = (props) => {
  return (
    <div>
        {props.signout()}
        <Navigate to='/' /> 
        
    </div>
  )
}

export default Signout;