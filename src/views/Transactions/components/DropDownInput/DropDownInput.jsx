import React, {useState} from 'react'
import {iconCaretDown} from "../../../../const"
import { useAppContext } from '../../../../context/AppContext'
import "./DropDownInput.css"


const DropDownItem=({field,isImage,handleDropDown})=>{

    

        const selectItem=()=>{
            console.log("Selected item is ", field.field);
            handleDropDown(field.field)
        }
    return (
        <li onClick={selectItem} className="dropdown-item bold">
            {isImage ?  <div className="avatar-div"><img className="avatar-img" src={field.field} alt="avatar"/></div> : <h5>{field.field} </h5>}
        </li>
    )
}

const DropDownInput = ({labelCaption,placeholder,fields,handleFunc,showLabel = true,isImage = false,zVal=2,textClassName=""}) => {
    const [showDropDown,setShowDropDown] = useState(false)


    const handleDropDown=(dropDownVal)=>{
        setShowDropDown(false);
        handleFunc(dropDownVal);
    }

  return (
    <div className="custom-dropdown-select-parent">
        {showLabel && <label className="label-text" htmlFor="">{labelCaption}</label>}
            <div className="custom-dropdown-input">
                <h5 className={textClassName}>{placeholder}</h5>
                <button onClick={()=>setShowDropDown(showDropDown=>showDropDown = !showDropDown)} className="icon-btn">
                <img className={`${showDropDown ? 'reverse-caret' : ''}`} src={iconCaretDown} alt="" />
                </button>
                <div style={{zIndex:zVal}} className={`custom-dropdown-select ${showDropDown ? 'show-dropdown' : 'hide-dropdown'}`}>
            {fields.map(field=>(
                <DropDownItem handleDropDown={handleDropDown} key={field.id} field={field} isImage={isImage}/>
            ))}
        </div>
            </div>
        
  
    </div>
  )
}

export default DropDownInput