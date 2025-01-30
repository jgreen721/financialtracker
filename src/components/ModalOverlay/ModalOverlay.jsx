import React from 'react'

import {Modal} from "./components"
import { useAppContext } from '../../context/AppContext'

import "./ModalOverlay.css"

const ModalOverlay = ({children,title,caption}) => {
        const {showModal} = useAppContext()
  return (
    <div className={`${showModal ? 'show-modaloverlay' : 'hide-modaloverlay'} modal-overlay`}>
        <Modal title={title} caption={caption}>
           {children}
        </Modal>
    </div>
  )
}

export default ModalOverlay