import React, { useEffect, useState } from 'react'
import { SectionHeader,BorderLabelCard } from '../../../../components'
import { useAppContext } from '../../../../context/AppContext'
import "./Budgets.css"

const Budgets = () => {
  const {budgets,transactions} = useAppContext();

  // console.log(budgets,transactions);
  let billsTotal = transactions.filter(t=>t.category == "Bills").reduce((a,b)=>a+b.amount,0);
  let diningTotal = transactions.filter(t=>t.category == "Dining Out").reduce((a,b)=>a+b.amount,0);
  let personalCareTotal = transactions.filter(t=>t.category == "Personal Care").reduce((a,b)=>a+b.amount,0);
  let entertainmentTotal = transactions.filter(t=>t.category == "Entertainment").reduce((a,b)=>a+b.amount,0);
  // console.log(billsTotal);
  // console.log(billsTotal + diningTotal + personalCareTotal + entertainmentTotal)
  let spentTotal = parseInt(Math.abs(billsTotal + diningTotal + personalCareTotal + entertainmentTotal));
  const [conicBg,setConicBg] = useState(`conic-gradient(red 0deg 50deg, blue 50deg 180deg, purple 180deg 360deg)`)

  useEffect(()=>{
    let greenPercent = parseFloat((50/975 * 100).toFixed(2))
    let bluePercent = parseFloat((750/975 * 100).toFixed(2))
    let peachPercent = parseFloat((75/975 * 100).toFixed(2))
    let greyPercent = parseFloat((100/975 * 100).toFixed(2))
    // console.log("GreenPercent",greenPercent);
    // console.log(greenPercent + bluePercent + peachPercent + greyPercent)

    let greenEndDeg = Math.floor((greenPercent * 360)/100)
    let blueEndDeg = Math.floor((bluePercent * 360)/100)
    let peachEndDeg = Math.floor((peachPercent * 360)/100)
    let greyEndDeg = Math.floor((greyPercent * 360)/100)
    // let blueEndDeg = Math.floor(bluePercent/360 * 100);
    // let peachEndDeg = Math.floor(peachPercent/360 * 100);
    // let greyEndDeg = Math.floor(greyPercent/360 * 100);
    // console.log(greenPercent,greenEndDeg)
    // console.log(greenEndDeg + blueEndDeg + peachEndDeg + greyEndDeg)
    let conicColor = `conic-gradient(green 0deg ${greenEndDeg}deg, blue ${greenEndDeg}deg ${greenEndDeg+blueEndDeg}deg, orange ${greenEndDeg+blueEndDeg}deg ${greenEndDeg+blueEndDeg + peachEndDeg}deg, grey ${greenEndDeg+blueEndDeg + peachEndDeg}deg 360deg)`
    console.log(conicColor)
    setConicBg(conicColor)

  },[]);
  return (
    <div className="section-card">
      <SectionHeader title="Budgets" link="budgets" btnText="See Details"/>
      <div className="overview-section-content budgets-row">
        <div className="budgets-chart-column">
          <div style={{background:conicBg}} className="budgets-chart">
            <div className="chart-circle">
              <h1>${spentTotal}</h1>
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