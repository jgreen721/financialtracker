import React from 'react'
import { categories } from '../../const'
import {EditModal,AddModal,BudgetCard} from "./components"
import { useAppContext } from '../../context/AppContext'
import "./Budgets.css"


const Budgets = () => {
  const {budgets,transactions,showModal} = useAppContext();
  // categories.forEach(category=>{
  //   let data = transactions.filter(t=>t.category == category);
  //   console.log(`Category:${category} - Transactions:${data.length}`);
  //   console.log("---------------------------------------------")
  // })
  console.log(transactions[0])

  return (
    <div className="budgets-view-parent-container">
{showModal && <EditModal/>}
{showModal && <AddModal/>}
<div className="budgets-view-content">
  <div className="budgets-content-column"></div>
  <div className="budgets-content-column">
    {categories.map(category=>(
        <BudgetCard key={category} category ={category} transactions={transactions.filter(transaction=>transaction.category == category)}/>
      ))
    }
  </div>
</div>
    </div>
  )
}

export default Budgets