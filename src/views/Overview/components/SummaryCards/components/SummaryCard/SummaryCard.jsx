import React from 'react'
import CountUp from "react-countup"
import "./SummaryCard.css"

const SummaryCard = ({item:{category,amount,darkBg}}) => {
  return (
    <div className={`${darkBg ? 'dark-bg' : 'white-bg'} summary-card`}>
      <h4 className="summary-category-h4 mid-thin label-text">{category}</h4>
      <h1>$
        <CountUp duration={2}
                 
                  end={amount}/>
      </h1>
    </div>
  )
}

export default SummaryCard