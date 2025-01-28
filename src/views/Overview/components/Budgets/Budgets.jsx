import React from 'react'
import { SectionHeader } from '../../../../components'
import { useAppContext } from '../../../../context/AppContext'
import "./Budgets.css"

const Budgets = () => {
  const {budgets} = useAppContext();

  // console.log(budgets);
  return (
    <div className="section-card">
      <SectionHeader title="Budgets" link="budgets" btnText="See Details"/>
      <div className="overview-section-content budgets-row">
        <div className="budgets-chart-column">
          <div className="budgets-chart">
            <div className="chart-circle">
              <h1>$338</h1>
              <h5 className="mid-thin">of $975 limit</h5>
            </div>
          </div>
        </div>
        <ul className="budgets-list">
          {budgets.map(budget=>(
            <li key={budget.category} className="budget-item">
              <div style={{background:budget.theme}} className="border-left budget-border"></div>
              <div className="flex-column budget-item-content">
                <h5 className="mid-thin">{budget.category}</h5>
                <h4>${budget.maximum}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Budgets