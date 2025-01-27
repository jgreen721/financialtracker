import React from 'react'
import { motion } from 'framer-motion'
import {iconEllipsis} from "../../const"
import "./Pots.css"
import { useAppContext } from '../../context/AppContext'

const Pots = () => {
  const {pots} = useAppContext();

  console.log(pots)
  return (
    <motion.div initial={{translateY:100}} animate={{translateY:0,transition:{duration:2,delay:1}}} exit={{scale:0}} transition={{type:'easeInOut',duration:2}}>
      <ul className="pots-cards">
        {pots.map(pot=>(
          <li key={pot.name} className="pot-item-card">
            <div className="pot-card-top-row pot-card-row">
              <div>
                <div className="color-circle-div"></div>
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
              <div className="pot-label-row">
                {(pot.total/pot.target * 100).toFixed(1)}%
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
        ))}
      </ul>
    </motion.div>
  )
}

export default Pots