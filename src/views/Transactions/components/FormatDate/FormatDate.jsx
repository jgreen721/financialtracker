import React from 'react'
import "./FormatDate.css"

const FormatDate = ({date}) => {
  return (
    <div>
        <h5 className="mid-thin">{date.split("T")[0]}</h5>
    </div>
  )
}

export default FormatDate