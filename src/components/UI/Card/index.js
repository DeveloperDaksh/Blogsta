import React from 'react'
import './style.css'
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div classname="card">
        {props.children}
    </div>
   )

 }

export default Card