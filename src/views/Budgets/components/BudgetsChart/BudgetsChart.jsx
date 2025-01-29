import React from 'react'
import { SpendingSummary } from './components'
import "./BudgetsChart.css"

const BudgetsChart = ({transactions,categories}) => {
  return (
    <div className="section-card">
        <div className="chart">
          <div className="budgets-chart">
            <div className="chart-circle">
              <h1>$338</h1>
              <h5 className="mid-thin">of $975 limit</h5>
            </div>
          </div>
        </div>
        <SpendingSummary categories={categories} transactions={transactions}/>
    </div>
  )
}

export default BudgetsChart