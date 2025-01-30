import React from 'react'
import CountUp from "react-countup";

import "./BorderLabelCard.css"

const BorderLabelCard = ({delay,label,amount,theme}) => {

    console.log(delay);
  return (
    <li className="pot-summary-item">
    <div style={{backgroundColor:theme,"--delay":`${delay/2}s`}} className="pot-summary-border"></div>
    <div style={{"--delay":`${delay}s`}} className="pot-summary-content">
      <h3 className="label-text mid-thin">{label}</h3>
      <h4>$
      <CountUp delay={delay}
               end={amount}
               duration={2}/>
               {/* {pot.total} */}
      </h4>
    </div>
  </li>
  )
}

export default BorderLabelCard