import React from 'react'
import "./SummaryCard.css"

const SummaryCard = () => {
  const data = [
    {id:1, title:"Paid Bills", value:"4 ($190.00)",color:"dark-text"},
    {id:2, title:"Total Upcoming", value:"4 ($194.98)",color:"dark-text"},
    {id:3, title:"Due Soon", value:"2 ($59.98)",color:"error-text"},
  ]
  return (
    <div className="section-card-small-padding bg-light mt-2">
      <h3>Summary</h3>
    <ul className="summary-recurring-items">
      {data.map(item=>(
        <li key={item.id} className={`summary-recurring-item space-between ${item.color}`}>
          <h3 className="mid-thin">{item.title}</h3>
          <h3>{item.value}</h3>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default SummaryCard