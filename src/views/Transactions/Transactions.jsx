import React from 'react'
import {iconSearch} from "../../const"
import {useAppContext} from "../../context/AppContext"
import "./Transactions.css"

const Transactions = () => {
  const {transactions} = useAppContext();
  return (
    <div className="section-card">
      {/* <ul className="transactions">
        {transactions.map((transaction,idx)=>(
          <TransactionItem key={idx} transaction={transaction}/>
        ))}
      </ul> */}
      <div className="space-between mb-4">
        <div className="search-form-div form-div">
          <label className="form-label" htmlFor="">
          <input type="text" className="form-control" placeholder="Search transactions" />
          <img className="form-icon" src={iconSearch} alt="" />
          </label>
        </div>
      </div>
      <table className="transaction-table">
        <thead>
          <tr className="transaction-row">
            <th className="text-start label-text">Recipient/Sender</th>
            <th className="text-start label-text">Category</th>
            <th className="text-start label-text">Transaction Date</th>
            <th className="text-start label-text">Amount</th>
          </tr>
        </thead>
        <tbody>
        {transactions.map((transaction,idx)=>(
          <tr className="transaction-row" key={idx}>
            <td className="flex-start gap-2">
            <div className="avatar-div">
              <img src={transaction.avatar} alt="" />
            </div>
            <h5>{transaction.name}</h5>
          </td>
          <td>
            {transaction.category}
          </td>
          <td>
            {transaction.date}
          </td>
          <td>
            ${transaction.amount}
          </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions