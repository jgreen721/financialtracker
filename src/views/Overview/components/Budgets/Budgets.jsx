import React from 'react'
import { SectionHeader,BorderLabelCard } from '../../../../components'
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
          {budgets.map((budget,idx)=>
            <BorderLabelCard key={idx} delay={idx} label={budget.category} theme={budget.theme} amount={budget.maximum}/>
)}
        </ul>
      </div>
    </div>
  )
}

export default Budgets