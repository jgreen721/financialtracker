import React, {useState} from 'react'
import {iconCaretDown} from "../../../../const"
import "./DropDownInput.css"


const DropDownItem=({field})=>{

    return (
        <li className="dropdown-item bold">
            <h5>{field.field} </h5>
        </li>
    )
}

const DropDownInput = ({labelCaption,placeholder,fields}) => {
    const [showDropDown,setShowDropDown] = useState(false)
  return (
    <div className="custom-dropdown-select-parent">
        <label htmlFor="">{labelCaption}</label>
            <div className="custom-dropdown-input">
                <h5>{placeholder}</h5>
                <button onClick={()=>setShowDropDown(showDropDown=>showDropDown = !showDropDown)} className="icon-btn">
                <img className={`${showDropDown ? 'reverse-caret' : ''}`} src={iconCaretDown} alt="" />
                </button>
                <div className={`custom-dropdown-select ${showDropDown ? 'show-dropdown' : 'hide-dropdown'}`}>
            {fields.map(field=>(
                <DropDownItem key={field.id} field={field}/>
            ))}
        </div>
            </div>
        
  
    </div>
  )
}

export default DropDownInput