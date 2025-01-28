import React from 'react'
import {iconCaretRight, iconEllipsis} from "../../../../const"
import "./BudgetCard.css"

const BudgetCard = ({category,theme,transactions}) => {
  console.log(transactions);
  return (
    <div className="section-card budget-card">
      <div className="budget-card-title-row space-between">
        <div className="flex-start gap-2">
          <div className="color-dot-div">
            <div className={`color-dot ${theme}`}></div>
          </div>
            <h3>{category}</h3>
        </div>
        <div>
          <button className="icon-btn">
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
      </div>
      <div className="latest-spending-card">
        <div className="space-between">
          <h5>Latest Spending</h5>
          <button className="">
            See All
            <img src={iconCaretRight} alt="" />
          </button>
        </div>
        <ul className="latest-spending-items">
          {transactions.map(transaction=>(
            <li className="transaction-item">
              <div className="space-between">
                <div className="flex-start gap-2">
              <div className="transaction-icon-div avatar-div">
                <img src={transaction.avatar} alt="" />
              </div>
              <h4>{transaction.name}</h4>
              </div>
              <div>
                <h5>{transaction.amount < 0 ? "-$" : "$"}{Math.abs(transaction.amount)}</h5>
                <h5 className="mid-thin label-text">{transaction.date.split("T")[0]}</h5>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BudgetCard