import React from 'react'
import {  iconNavTransactions,  iconNavBudgets, iconNavBudgetsActive,iconNavPots, iconNavPotsActive, iconNavRecurring, iconNavRecurringActive, iconNavOverview, iconNavOverviewActive,  iconMinimizeMenu, iconNavTransactionsActive } from '../../const'
import {Link, useLocation} from "react-router-dom"

// import { useAppContext } from '../../context/AppContext'
import "./MobileNav.css"

const MobileNav = () => {
    const location = useLocation();
    const links = [
      {id:1,url:"/",name:"Overview",icon:iconNavOverview,active:iconNavOverviewActive},
      {id:2,url:"/transactions",name:"Transactions",icon:iconNavTransactions,active:iconNavTransactionsActive},
      {id:3,url:"/budgets",name:"Budgets",icon:iconNavBudgets,active:iconNavBudgetsActive},
      {id:4,url:"/pots",name:"Pots",icon:iconNavPots,active:iconNavPotsActive},
      {id:5,url:"/recurring",name:"Recurring Bills",icon:iconNavRecurring,active:iconNavRecurringActive},
    ]
    // const {setShowMenu,showMenu} = useAppContext();
  return (
    <nav className="mobile-nav">
        <ul className="mobile-nav-links space-between">
            {links.map(link=>(
                <li key={link.id} className={`${location.pathname == link.url ? 'active-mobile-link-item' : ''}  mobile-nav-link-item`}>
                    <Link to={link.url} className={`${location.pathname == link.url ? 'dark-text' : 'light-text'} mobile-nav-link`}>
                        <div className="mobile-nav-icon">
                            <img src={location.pathname == link.url ? link.active : link.icon} alt="" />
                        </div>
                        <h5 className="capitalize">{link.url.split("/")[1] == "" ? "Home" : link.url.split("/")[1]}</h5>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MobileNav