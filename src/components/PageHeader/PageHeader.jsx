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
    const {setShowMenu,showMenu,setShowModal} = useAppContext();

    // console.log(location.pathname)


    
  return (
    <div className="page-header">
        <h1 className="capitalize page-header-h1">{`${user}'s`} {location.pathname == '/' ? "Overview" : location.pathname == "recurring" ? "Recurring Bills" : location.pathname.split("/")[1]}</h1>
        <div className="page-btns-row">
          <div>
          <button onClick={()=>setShowMenu(true)} className={`icon-btn icon-menu-btn ${showMenu ? "hide-menu-btn" : "show-menu-btn"}`}>
            <IoMdNavigate />
          </button>
          </div>
          {location.pathname == "/pots" || location.pathname == "/budgets" || location.pathname == "/transactions" ? <button className="btn dark-btn" onClick={()=>setShowModal((showModal)=>showModal=!showModal)}>+ <span className="desktop-btn-text">Add New {location.pathname.split("/")[1].replace("s","")}</span></button> : null}
          <button onClick={handleSignOut} className="signout-btn icon-btn">
            <FaSignOutAlt/>
          </button>
        </div>
    </div>
  )
}

export default PageHeader