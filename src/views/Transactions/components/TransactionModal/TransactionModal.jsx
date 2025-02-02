import React, {useState} from 'react'
import {categories} from "../../../../const"
import { useAppContext } from '../../../../context/AppContext'
import DropDownInput from "../DropDownInput/DropDownInput"
// import {Modal} from "../../../../components"
import "./TransactionModal.css"

const TransactionModal = () => {
  const [amount,setAmount] = useState("200");
  const [username,setUsername] = useState("test-user");
  const [category,setCategory] = useState("Entertainment");
  const [avatar,setAvatar] = useState("");
  const {setShowModal,addTransaction} = useAppContext();


  const { transactions } = useAppContext();
  let categoryFields = [];
  categories.forEach((category,idx)=>{
    categoryFields[idx] = {
      id:idx+1,
      field:category.category
    }
  })
  let avatars = [];
  transactions.forEach(transaction=>{
      avatars.push({id:avatars.length+1,field:transaction.avatar})
  })


  const handleAddTransaction = ()=>{
    console.log("handleAddTransaction fired! --");
    let newTransaction = {
          category,
          amount,
          username,
          avatar,
    }
    console.log(newTransaction)
    addTransaction(newTransaction)
    setShowModal(false)
  }
  return (
    // <div className={`transaction-modal-parent ${showModal ? 'show-transaction-modal' : 'hide-transaction-modal'}`}>
      <div className="transaction-modal">
        <div className="form-div">
          {/* <h5>Category Select</h5> */}
          <label className="form-label" htmlFor="category">Category</label>
          <DropDownInput zVal={5} showLabel={false} labelCaption="Category" placeholder="Choose transaction category" fields={categoryFields} handleFunc={setCategory} textClassName="label-text"/>
        </div>
        <div className="form-div">
        <div className="form-div">
           <label className="form-label" htmlFor="amount">Amount</label>
           <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} name="amount" autoComplete="off" id="amount" className="form-control" placeholder="e.g. 2000" />
           {/* <span className={`input-span-icon ${amount != "" ? '' : 'muted-span'}`}>
               <h5>$</h5>
           </span> */}
       </div>
        </div>
        <div className="form-div form-row">
          <label className="form-label" htmlFor="username">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Username..." />
          <DropDownInput showLabel={false} isImage={true} labelCaption="avatar" placeholder="Avatar" fields={avatars} handleFunc={setAvatar} textClassName="label-text"/>
        </div>
        <button onClick={handleAddTransaction} className="btn bg-magenta text-light">+ Add Transaction</button>
      </div>
    // </div>
  )
}

export default TransactionModal