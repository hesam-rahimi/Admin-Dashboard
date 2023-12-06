import React from 'react'
import "./Feature.css"
const Feature = (props) => {
  return (
    <div className='featureItem'>
       <div className='featureTitle'>
        {props.title}
       </div>
       <div className="featureContainer">
        <span className="featureMoney">
            ${props.money}
        </span>
        <span className="featureRate">
            {props.rate} {props.icon}
        </span>
       </div>
       <span className='featureSub'>
        Compared to last month
       </span>
    </div>
  )
}

export default Feature