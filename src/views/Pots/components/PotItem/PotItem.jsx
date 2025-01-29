import React from 'react'
import "./PotItem.css"

const PotItem = ({pot}) => {
  return (
    <li key={pot.name} className="pot-item-card">
    <div className="pot-card-top-row pot-card-row">
      <div>
        <div className="color-circle-div">
          <div style={{background:pot.theme}} className="circle-dot"></div>
        </div>
        <h3>{pot.name}</h3>
      </div>
      <div className="ellipsis-div">
        <img src={iconEllipsis} alt="" />
      </div>
    </div>
    <div>
      <div className="pot-label-row pot-card-row">
        <h5>Total Saved</h5>
        <h2>${pot.total}</h2>
      </div>
      <div className="progress-bar"></div>
      <div className="pot-label-row space-between">
        <p>{(pot.total/pot.target * 100).toFixed(1)}% </p>
        <p>Target of ${pot.target}</p>
      </div>
    </div>
    <div className="btns-row">
      <button className="pot-item-btn">
        + Add Money
      </button>
      <button className="pot-item-btn">
        Withdraw
      </button>
    </div>
  </li>
  )
}

export default PotItem