import React from 'react'
import {iconRecurringBills} from "../../../../const"
import "./TotalBillsCard.css"

const TotalBillsCard = () => {
  return (
    <div className="bg-dark section-card-small-padding light-text total-bills-card">
      <div className="icon-div">
        <img className="recurring-icon" src={iconRecurringBills} alt="" />
      </div>
      <div>
        <h4 className="mid-thin mb-2">Total Bills</h4>
        <h1>$384.98</h1>
      </div>
    </div>
  )
}

export default TotalBillsCard