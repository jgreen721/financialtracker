import React from 'react'
import "./FormatAmount.css"

const FormatAmount = ({amount}) => {
  return (
    <div>
        <h4 className={`semi-bold ${amount > 0 ? 'green-text' : 'dark-text'}`}>{amount > 0 ? "+" : "-"}${Math.abs(amount)}</h4>
    </div>
  )
}

export default FormatAmount