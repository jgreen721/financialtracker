import React, {useEffect} from 'react'
import "./SummarySpendingItem.css"

const SummarySpendingItem = ({category,transactions}) => {


    function printItem(renderCategory){
        if(category == renderCategory){
    console.log(`${category}:`)
    let spendingTotal = transactions.filter(t=>t.category == category)
    spendingTotal = spendingTotal.map(s=>Math.abs(s.amount));
    spendingTotal = spendingTotal.reduce((acc,num)=>acc + num,0);
    let spendingCollected = transactions.filter(t=>t.category == category)
    spendingCollected = spendingCollected.map(s=>s.amount);
    spendingCollected = spendingCollected.reduce((acc,num)=>acc + num,0);
    console.log(`${spendingCollected}/${spendingTotal}`)

        }
     
    }


        printItem("Bills")


        useEffect(()=>{

            printItem();
        },[category])

    // .map(t=>Math.abs(t.amount).reduce((a,b)=>{a+b},0)
  return (
         <li key={category.id} className="space-between summary-budgets-item">
                    <div>
                        <div className="color-border">
                            <div className={`border-left ${category.theme}`}></div>
                        </div>
                        <h3 className="ml-2 mid-thin">{category.category}</h3>
                    </div>
                </li>
  )
}

export default SummarySpendingItem