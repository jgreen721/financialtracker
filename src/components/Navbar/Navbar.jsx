import React from 'react'
import { logoLarge, iconNavTransactions,  iconNavBudgets, iconNavBudgetsActive,iconNavPots, iconNavPotsActive, iconNavRecurring, iconNavRecurringActive, iconNavOverview, iconNavOverviewActive,  iconMinimizeMenu, iconNavTransactionsActive } from '../../const'
import {Link, useLocation} from "react-router-dom"

import "./Navbar.css"
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {
  const location = useLocation();
  const links = [
    {id:1,url:"/",name:"Overview",icon:iconNavOverview,active:iconNavOverviewActive},
    {id:2,url:"/transactions",name:"Transactions",icon:iconNavTransactions,active:iconNavTransactionsActive},
    {id:3,url:"/budgets",name:"Budgets",icon:iconNavBudgets,active:iconNavBudgetsActive},
    {id:4,url:"/pots",name:"Pots",icon:iconNavPots,active:iconNavPotsActive},
    {id:5,url:"/recurring",name:"Recurring Bills",icon:iconNavRecurring,active:iconNavRecurringActive},
  ]
  const {setShowMenu,showMenu} = useAppContext();


  return (
    <nav className={`nav ${showMenu ? '' : 'hide-nav'}`}>
      <div className="nav-col">
      <div className="nav-logo-div">
        <img src={logoLarge} alt="logo" />
      </div>
      <ul className="nav-links">
        {links.map(link=>(
          <li key={link.id} className="nav-link-item">
          <Link to={link.url} className={`nav-link ${location.pathname == link.url ? 'nav-link-active' : 'nav-link-default'}`}>
            <div className={`link-icon-div`}>
              {location.pathname == link.url ?
              <div className="active-link-icon-div">
              <img className="nav-icon" src={link.active} alt="active-link" />
              <img className="shadow-nav-icon" src={link.active} alt="active-link" />
              </div>
                :
              <img className="nav-icon" src={link.icon} alt="" />
                }
            </div>
            <h3>{link.name}</h3>
          </Link>
            </li>
        ))}
      </ul>
      </div>
    <div>
      <button onClick={()=>setShowMenu(false)} className="minimize-menu-btn">
        <img src={iconMinimizeMenu} alt="" />
       <h3> Minimize Menu</h3>
      </button>
    </div>
        </nav>
  )
}

export default React.memo(Navbar);
// export default Navbar;