import React, {useState} from 'react'
import {motion} from "framer-motion"
import {Outlet} from "react-router-dom"
import { PageHeader,Navbar,MobileNav,ModalOverlay } from '../../components'
import { AppProvider } from '../../context/AppContext'
import "./Dashboard.css"


const FadeInComponent = ({children})=>{


  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:1,delay:1}}} exit={{opacity:0,transition:{duration:1}}} transition={{type:'easeInOut',duration:2}}>{children}</motion.div>

  )
}

const Dashboard = () => {
  // console.log(showMenu)
  return (
    <AppProvider>
      <div className="dashboard-container">
        <Navbar/>
        <div className="dash-view-container">
          <PageHeader/>
          <div className="dash-views-content">
           <Outlet/>
           {/* <ModalOverlay/> */}
          </div>
        </div>
        <MobileNav/>
      </div>
      </AppProvider>
  )
}

export default Dashboard