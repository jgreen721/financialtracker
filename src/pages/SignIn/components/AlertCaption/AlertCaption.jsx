import React from 'react'
import { useAuthContext } from '../../../../context/AuthContext';
import "./AlertCaption.css"

const AlertCaption = () => {
    const {alert,status} = useAuthContext();

  return (
    <div className={`msg-to-user-div ${status > 0 ? 'accordion-open' : 'accordion-close'}`}>
    <h3 className={`msg-h3 ${status == 200 ? 'success-text' : 'error-text'}`}>{alert}</h3>
  </div>
  )
}

export default AlertCaption