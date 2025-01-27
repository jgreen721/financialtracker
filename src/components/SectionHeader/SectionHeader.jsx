import React from 'react'
import {Link} from "react-router-dom"
import {iconCaretRight} from "../../const"
import "./SectionHeader.css"

const SectionHeader = ({title,link,btnCaption}) => {
  return (
    <div className="section-header">
        <h2>{title}</h2>
        <Link className="section-header-link-btn" to={link}>
          {btnCaption}
          <img src={iconCaretRight} alt="" />
          </Link>

    </div>
  )
}

export default SectionHeader