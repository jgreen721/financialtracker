import React from 'react'
import { SectionHeader, BorderLabelCard } from '../../../../components'
import { useAppContext } from '../../../../context/AppContext'
import {iconPot} from "../../../../const"
import CountUp from "react-countup";
import "./Pots.css"




const Pots = () => {
  const {pots} = useAppContext();
  // console.log("Pots",pots);
  // console.log(pots)
 
  return (
    <div className="pots-card section-card">
      <SectionHeader title="Pots" link="pots" btnCaption="See Details"/>
      <div className="pots-card-content-section overview-section-content">
        <div className="pots-card-column pots-left-column">
          <div className="icon-div">
            <img src={iconPot} alt="" />
          </div>
          <div className="pots-total-div">
            <h4 className="pots-total-title mid-thin">Totals Saved</h4>
            <h1>$850</h1>
          </div>
        </div>
        <div className="pots-card-column">
          <div className="pots-summary-list">
            {pots.filter((pot,idx)=>idx != pots.length-1).map((pot,i)=>(
              // <li key={i} className="pot-summary-item">
              //   <div style={{backgroundColor:pot.theme,"--delay":`${i/2}s`}} className="pot-summary-border"></div>
              //   <div style={{"--delay":`${i}s`}} className="pot-summary-content">
              //     <h3 className="label-text mid-thin">{pot.name}</h3>
              //     <h4>$
              //     <CountUp delay={i}
              //              end={pot.total}
              //              duration={2}/>
              //     </h4>
              //   </div>
              // </li>
              <BorderLabelCard key={i} delay={i} label={pot.name} theme={pot.theme} amount={50}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pots