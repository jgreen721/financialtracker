import React from 'react'
// import {Modal} from "../../../../components"
import "./TransactionModal.css"

const TransactionModal = () => {
  return (
    // <div className={`transaction-modal-parent ${showModal ? 'show-transaction-modal' : 'hide-transaction-modal'}`}>
      <div className="transaction-modal">
        <div className="form-div">
          <h5>Category Select</h5>
        </div>
        <div className="form-div">
          <h5>Amount</h5>
        </div>
        <div className="form-div">
          <h5>Username</h5>
          <small>Choose Avatar</small>
        </div>
      </div>
    // </div>
  )
}

export default TransactionModal