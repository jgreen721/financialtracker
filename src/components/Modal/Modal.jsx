import React from 'react'
import "./Modal.css"

const Modal = ({title,caption,children}) => {
  return (
    <div className="modal">
      <div className="space-between modal-title-row">
        <h1>{title}</h1>
        <button className="close-modal-btn">
          X
        </button>
        </div>
        <h4 className="mid-thin label-text">{caption}</h4>
        <div className="modal-children-content">
            {children}
        </div>
    </div>
  )
}

export default Modal