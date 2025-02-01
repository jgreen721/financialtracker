import React, {useState, useEffect,useCallback} from 'react'
import {iconSearch} from "../../const"
import {useAppContext} from "../../context/AppContext"
import { ModalOverlay } from '../../components'
import {DropDownInput, FormatAmount,FormatDate,TransactionModal} from "./components"
import "./Transactions.css"

const Transactions = () => {
  const {transactions} = useAppContext();
  const [batch, setBatch] = useState(transactions.filter((t,idx)=>idx < 6));
  const [transactionName,setTransactionName] = useState("");
  const [category,setCategory] = useState("All Categories");
  const [sortedBy,setSortedBy] = useState("Latest")
  const [rendered,setRendered] = useState(false)


  let sortedByFields =[
    {id:0,field:"Latest"},
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
  {id:6,field:"All Categories"},
]


useEffect(()=>{
  if(transactions.length){
    setBatch(transactions.filter((t,idx)=>idx < 6))
    
  }
},[transactions])

useEffect(()=>{
  if(category != "All Categories"){
    let temp = transactions.filter(t=>t.category == category);
    setBatch(temp);
    console.log("Filtering transactions to category of ",category);
  }
  else{
   setBatch(transactions.filter((t,idx)=>idx < 6))
}
},[category])


useEffect(()=>{
  if(sortedBy == "Highest"){
    // console.log("sorting by highest!")
    setBatch(batch=>batch = [...batch].sort((a,b)=>a.amount - b.amount));
    
  }

  if(sortedBy == "Lowest"){
    // console.log("sorting by lowest!")
    setBatch(batch=>batch = [...batch].sort((a,b)=>b.amount - a.amount));

}

if(sortedBy == "Z-A"){
  setBatch((batch=>batch=[...batch].sort((a,b)=>a.name.charCodeAt(0) - b.name.charCodeAt(0))))
}

if(sortedBy == "A-Z"){
  setBatch((batch=>batch=[...batch].sort((a,b)=>b.name.charCodeAt(0) - a.name.charCodeAt(0))))
}

},[sortedBy])


// const populateBatch=()=>{
//   let temp_batch = transactions.filter((t,idx)=>idx < 6)
//   console.log("tempBatch",temp_batch)
//   setBatch(temp_batch);
// }

return (
    <div className="section-card">

   
      <div className="space-between mb-4 gap-2">
        <div className="search-form-div form-div">
          <label className="form-label" htmlFor="">
          <input type="text" className="form-control" name="transaction-name" value={transactionName} onChange={(e)=>setTransactionName(e.target.value)} placeholder="Search transactions" />
          <img className="form-icon" src={iconSearch} alt="" />
          </label>
        </div>
        <div className="dropdown-row">
          <div className="dropdown-column">
            <DropDownInput labelCaption="Sort by" placeholder={sortedBy} fields={sortedByFields} handleFunc={setSortedBy}/>
          </div>
          <div className="dropdown-column">
          <DropDownInput labelCaption="Category" placeholder={category} fields={categoryFields} handleFunc={setCategory}/>

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