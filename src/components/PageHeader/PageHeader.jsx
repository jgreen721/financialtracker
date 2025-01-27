import React from 'react'
import {FaSignOutAlt} from "react-icons/fa"
import { IoMdNavigate } from "react-icons/io";

import { useLocation } from 'react-router'
import { useAppContext } from '../../context/AppContext'
import { useAuthContext } from '../../context/AuthContext'
import "./PageHeader.css"

const PageHeader = () => {
    const location = useLocation();
    const {handleSignOut,user} = useAuthContext();
    const {setShowMenu,showMenu} = useAppContext();

    // console.log(location.pathname)

    const toggleModal=()=>{
      if(location.pathname == "/budgets"){
        console.log('toggle add budgets modal!')
      }
      else{
        console.log("toggle pots modal!");
      }
    }
    
  return (
    <div className="page-header">
        <h1 className="capitalize">{`${user}'s`} {location.pathname == '/' ? "Overview" : location.pathname == "recurring" ? "Recurring Bills" : location.pathname.split("/")[1]}</h1>
        <div className="page-btns-row">
          <div>
          <button onClick={()=>setShowMenu(true)} className={`icon-btn ${showMenu ? "hide-menu-btn" : "show-menu-btn"}`}>
            <IoMdNavigate />
          </button>
          </div>
          {location.pathname == "/pots" || location.pathname == "/budgets" ? <button className="btn dark-btn" onClick={toggleModal}>+ Add New {location.pathname.split("/")[1].replace("s","")}</button> : null}
          <button onClick={handleSignOut} className="signout-btn icon-btn">
            <FaSignOutAlt/>
          </button>
        </div>
    </div>
  )
}

export default PageHeader