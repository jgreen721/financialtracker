import React from 'react'
import {TotalBillsCard,SummaryCard} from "./components"
import { useAppContext } from '../../context/AppContext'
import "./Recurring.css"

const Recurring = () => {
  const {transactions} = useAppContext();
  const recurringTransactions = transactions.filter(transaction=>transaction.recurring);
  console.log("Recurring",recurringTransactions);
  return (
    <div className="recurring-view-parent-container">
<div className="view-content-flex">
  <div className="view-content-column thin-content-column">
    <TotalBillsCard/>
    <SummaryCard/>
  </div>
  <div className="view-content-column wide-content-column">
  <table className="transaction-table">
        <thead>
          <tr className="transaction-row">
            <th className="text-start label-text">Bill/Title</th>
            <th className="text-start label-text">Due Date</th>
            <th className="text-start label-text">Amount</th>
          </tr>
        </thead>
        <tbody>
        {recurringTransactions.map((transaction,idx)=>(
          <tr className="transaction-row" key={idx}>
            <td className="flex-start gap-2">
            <div className="avatar-div">
              <img src={transaction.avatar} alt="" />
            </div>
            <h5>{transaction.name}</h5>
          </td>
          <td>
            {transaction.date.split("T")[0]}
          </td>
          <td>
          ${transaction.amount}
          </td>
          </tr>
        ))}
        </tbody>
      </table>
  </div>
</div>
    </div>
  )
}

export default Recurring