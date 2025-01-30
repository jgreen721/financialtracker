import React from 'react'
import { motion } from 'framer-motion'
import {PotItem} from "./components"
import "./Pots.css"
import { useAppContext } from '../../context/AppContext'

const Pots = () => {
  const {pots} = useAppContext();

  console.log(pots)
  return (
    <motion.div initial={{translateY:100}} animate={{translateY:0,transition:{duration:2,delay:1}}} exit={{scale:0}} transition={{type:'easeInOut',duration:2}}>
      <ul className="pots-cards">
        {pots.map((pot,idx)=>(
          <PotItem key={idx} pot={pot}/>
        ))}
      </ul>
    </motion.div>
  )
}

export default Pots