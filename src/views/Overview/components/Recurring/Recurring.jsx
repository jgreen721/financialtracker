import React from 'react'
import { SectionHeader } from '../../../../components'
import "./Recurring.css"

const Recurring = () => {
  // const {} 
  const recurringData = [
    {id:1,title:"Paid Bills",amount:"190.00",color:"bg-green"},
    {id:2,title:"Total Upcoming",amount:"194.98",color:"bg-gold"},
    {id:3,title:"Due Soon",amount:"59.98",color:"bg-cyan"},
  ]
  return (
    <div className="overview-section section-card">
      <SectionHeader title="Recurring Bills" link="recurring" btnText="See Details"/>
      <ul className="recurring-section-list overview-section-content">
        {recurringData.map(item=>(
          <li key={item.id} className="recurring-item">
            <div className={`recurring-item-border-left ${item.color}`}></div>
            <h5 className="mid-thin">{item.title}</h5>
            <h3>${item.amount}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recurring