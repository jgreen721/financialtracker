import React from 'react'
import { categories } from '../../const'
import {EditModal,AddModal,BudgetCard,BudgetsChart} from "./components"
import { useAppContext } from '../../context/AppContext'
import "./Budgets.css"


const Budgets = () => {
  const {budgets,transactions,showModal} = useAppContext();
  // categories.forEach(category=>{
  //   let data = transactions.filter(t=>t.category == category);
  //   console.log(`Category:${category} - Transactions:${data.length}`);
  //   console.log("---------------------------------------------")
  // })
  // console.log(transactions[0])

  return (
    <div className="budgets-view-parent-container">
{showModal && <EditModal/>}
{showModal && <AddModal/>}
<div className="budgets-view-content view-content-flex">
  <div className="view-content-column thin-content-column">
    <BudgetsChart categories={categories} transactions={transactions}/>
  </div>
  <div className="view-content-column wide-content-column">
    {categories.map(category=>(
        <BudgetCard key={category.id} category={category.category} theme={category.theme} transactions={transactions.filter(transaction=>transaction.category == category.category)}/>
      ))
    }
  </div>
</div>
    </div>
  )
}

export default Budgets