import React, {useEffect} from 'react'
import { useAppContext } from '../../../../context/AppContext'
import { SectionHeader } from '../../../../components'
import "./Transactions.css"

const Transactions = () => {
  const {transactions} = useAppContext();
  // console.log("transactions",transactions);

  const formatDate = (date)=>{
    // console.log(date)
    let months = ["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let splitDate = date.split("T")[0];
    let numbers = splitDate.split("-");
    let dayString = `${numbers[2]}  ${months[parseInt(numbers[1])-1]}  ${numbers[0]}`

    return dayString;
  }
  return (
    <div className="transactions-overview-container overview-section section-card">
      <SectionHeader title="Transactions" link="transactions" btnCaption="View All"/>
      <ul className="transactions overview-section-content">
      {transactions.filter((t,i)=>i < 5).map((transaction,idx)=>(
        <li key={idx} className="transaction-item space-between">
          <div className="transaction-content-row">
          <div className="avatar-div">
            <img src={transaction.avatar} alt="" />
          </div>
          <h4 className="transaction-name">{transaction.name}</h4>
          </div>
          <div className="transaction-right-column-data flex-column">
            <h2 className={`${transaction.amount > 0 ? 'dark-text' : 'green-text'}`}>{transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}</h2>
            <h4 className="mid-thin">{formatDate(transaction.date)}</h4>
          </div> 
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Transactions