import React from 'react'
import {Navigate} from 'react-router-dom'

const User = (prop) => {
    console.warn(prop.match.params.id)
  return (
    <div>
    <h1>this is user no {prop.match.params.id}</h1>

      
    </div>
  )
}

export default Navigate(User)
