import React from 'react'
import {SpendingSummaryItem} from "./components"
import "./SpendingSummary.css"

const SpendingSummary = ({categories,transactions}) => {

    // console.log("Categories",categories)
    // console.log(transactions)

  return (
    <div className="spending-summary-card">
        <h2 className="spending-summary-title">Spending Summary</h2>
        <ul className="categories">
            {categories.map(category=>(
           
                <SpendingSummaryItem key={category.id} category={category.category} transactions={transactions}/>
            ))}
        </ul>
    </div>
  )
}

export default SpendingSummary