import React from 'react'
import {SummaryCard} from "./components"
import "./SummaryCards.css"

const SummaryCardsSection = () => {
  const summaryData =[
    {id:1,category:"Current Balance",amount:'4836.00',darkBg:true},
    {id:2,category:"Income",amount:'3814.25',darkBg:false},
    {id:3,category:"Expenses",amount:'1700.50',darkBg:false},
  ]
  return (
    <div className="summary-cards-row">
      {summaryData.map(item=>(
        <SummaryCard key={item.id} item={item}/>
       ))}
    </div>
  )
}

export default SummaryCardsSection