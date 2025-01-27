import React, {useState} from 'react'
import { Modal } from '../../../../components'
import {iconCaretDown,themes,categories} from "../../../../const"
import "./EditModal.css"

const EditModal = () => {
 
        
  
        const [category,setCategory] = useState(categories[0])
        const [showCategory,setShowCategory] = useState(false);
        const [theme,setTheme] = useState(themes[0])
        const [showTheme,setShowTheme] = useState(false);
        const [max,setMax] = useState("");


  return (
    <Modal title = "Edit Modal" caption = "As your budgets change, feel free to update your spending limits.">
    <div className="edit-modal">
       <div className="form-div">
       <label className="form-label" htmlFor="category">Budget Category</label>

           <div className="custom-select-div">
               <div onClick={()=>setShowCategory((showCategory)=>showCategory = !showCategory)} className="custom-select-input space-between">
                   <h5>{category}</h5>
                   <div className={`${showCategory ? 'caret-up' : 'caret-down'}`}>
                       <img src={iconCaretDown} alt="" />
                   </div>
                   {/* <input type="hidden" name="category" id="category" value={category} /> */}
               </div>
               <div className={`custom-select-drop-down ${showCategory ? 'show-drop-down' : 'hide-drop-down'}`}>
                   {categories.map(category=>(
                       <li className="drop-down-item space-between" key={category}>
                           <h4>{category}</h4>
                       </li>
                   ))}
               </div>
           </div>
       </div>
       <div className="form-div">
           <label className="form-label" htmlFor="max">Maximum Spend</label>
           <input type="text" value={max} onChange={(e)=>setMax(e.target.value)} name="max" id="max-spend" className="form-control" placeholder="e.g. 2000" />
           <span className={`input-span-icon ${max != "" ? '' : 'muted-span'}`}>
               <h5>$</h5>
           </span>
       </div>
       <div className="form-div">
       <label className="form-label" htmlFor="theme">Theme</label>

           <div className="custom-select-div">
               <div onClick={()=>setShowTheme((showTheme)=>showTheme = !showTheme)} className="custom-select-input space-between">
                   <h5>{theme}</h5>
                   <div className={`caret-div ${showTheme ? 'caret-up' : 'caret-down'}`}>
                       <img src={iconCaretDown} alt="" />
                   </div>
               </div>
               <div className={`custom-select-drop-down ${showTheme ? 'show-drop-down' : 'hide-drop-down'}`}>
                   {themes.map(theme=>(
                       <li className="drop-down-item space-between" key={theme}>
                           <h4>{theme}</h4>
                           <div className="color-dot"></div>

                       </li>
                   ))}
               </div>
           </div>
       </div>
       <div className="form-div">
           <button className="btn dark-btn">Add Budget</button>
       </div>
    </div>
    </Modal>
  )
}

export default EditModal


