import React, {useEffect, useState} from 'react'
import "./SummarySpendingItem.css"

const SummarySpendingItem = ({category,theme,transactions}) => {
    const [total,setTotal] = useState(0);
    const [achieved,setAchieved] = useState(0)

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
            setTotal(spendingCollected);
            setAchieved(spendingTotal)
        }
     
    }




        useEffect(()=>{

            printItem(category);
        },[category])

    // .map(t=>Math.abs(t.amount).reduce((a,b)=>{a+b},0)
  return (
         <li key={category.id} className="space-between summary-budgets-item">
                    <div>
                        <div className="color-border">
                            <div className={`border-left ${theme}`}></div>
                        </div>
                        <h3 className="ml-2 mid-bold label-text">{category}</h3>
                    </div>
                    <div className="flex gap-1">
                        <h4>${achieved.toFixed(2)}</h4>
                        <h5 className="mid-bold label-text"> of ${total.toFixed(2)}</h5>
                    </div>
                </li>
  )
}

export default SummarySpendingItem