import React from 'react'
import {SummaryCards,Pots,Transactions,Budgets,Recurring} from "./components"
import "./Overview.css"

const Overview = () => {
  return (
    <div className="overview-container">
      <SummaryCards/>
      <div className="overview-main-content">
        <div className="overview-content-column">
          <Pots/>
          <Transactions/>
        </div>
        <div className="overview-content-column">
          <Budgets/>
          <Recurring/>
        </div>
      </div>
    </div>
  )
}

export default Overview