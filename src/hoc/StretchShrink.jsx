import React from 'react'
import {motion} from "framer-motion"

const StretchShrink = ({children}) => {
  return (
    <motion.div initial={{scaleX:0}} animate={{scaleX:1, transition:{duration:1,type:"spring"}}} exit={{scaleX:0,transition:{duration:1}}}>
        {children}
    </motion.div>
  )
}

export default StretchShrink