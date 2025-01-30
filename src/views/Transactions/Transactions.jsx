import React, {useState, useEffect} from 'react'
import {iconSearch} from "../../const"
import {useAppContext} from "../../context/AppContext"
import { ModalOverlay } from '../../components'
import {DropDownInput, FormatAmount,FormatDate,TransactionModal} from "./components"
import "./Transactions.css"

const Transactions = () => {
  const {transactions, showModal,setShowModal} = useAppContext();
  const [batch, setBatch] = useState([]);
  const [page,setPage] = useState(1)


  let dateFields =[
    {id:1,field:"Oldest"},
    {id:2,field:"A-Z"},
    {id:3,field:"Z-A"},
    {id:4,field:"Highest"},
    {id:5,field:"Lowest"},
]


let categoryFields =[
  {id:1,field:"Entertainment"},
  {id:2,field:"Bills"},
  {id:3,field:"Groceries"},
  {id:4,field:"Dining Out"},
  {id:5,field:"Transportation"},
]


useEffect(()=>{
  populatePages();
  populateBatch();
},[transactions])

const populatePages=()=>{

}

const populateBatch=()=>{
  let temp_batch = transactions.filter((t,idx)=>idx < 10)
  setBatch(temp_batch);
}
  return (
    <div className="section-card">

      {/* <ul className="transactions">
        {transactions.map((transaction,idx)=>(
          <TransactionItem key={idx} transaction={transaction}/>
        ))}
      </ul> */}
      <div className="space-between mb-4 gap-2">
        <div className="search-form-div form-div">
          <label className="form-label" htmlFor="">
          <input type="text" className="form-control" placeholder="Search transactions" />
          <img className="form-icon" src={iconSearch} alt="" />
          </label>
        </div>
        <div className="dropdown-row">
          <div className="dropdown-column">
            <DropDownInput labelCaption="Sort by" placeholder="Latest" fields={dateFields}/>
          </div>
          <div className="dropdown-column">
          <DropDownInput labelCaption="Category" placeholder="All Transactions" fields={categoryFields}/>

          </div>
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
        {batch.map((transaction,idx)=>(
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
            <FormatDate date={transaction.date}/>
          </td>
          <td>
            <FormatAmount amount={transaction.amount}/>
          </td>
          </tr>
        ))}
        </tbody>
      </table>
      <ModalOverlay title="Add New Transaction" caption="Add a new transaction">
         <TransactionModal/>
     </ModalOverlay>
    </div>
  )
}

export default Transactions