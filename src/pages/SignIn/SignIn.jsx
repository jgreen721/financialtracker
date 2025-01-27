import React, {useState} from 'react'
import {StretchShrink} from "../../hoc"
import {illustrationAuthentication,logoLarge} from "../../const"
import {LoginForm, SignUpForm,AlertCaption} from "./components"
import "./SignIn.css"
import { useAuthContext } from '../../context/AuthContext'

const SignIn = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <StretchShrink>
<div className="view-container signin-container">
  <div className="mobile-signin-header">
    <img className="small-signin-logo" src={logoLarge} alt="" />
  </div>
  <div className="signin-content">
    <div className="signin-col">
      <div className="signin-img-div">
        <img className="signin-img" src={illustrationAuthentication} alt="" />
      </div>
    </div>
    <div className="signin-col large-signin-col">
        <AlertCaption/>
      <div className={`signin-card ${showLogin ? 'show-login-side' : ''}`}>
        <SignUpForm setShowLogin={setShowLogin} />
        <LoginForm setShowLogin={setShowLogin} />
      </div>
    </div>
  </div>
  {/* <strong className="footer-contact-link"> */}
    <a className="footer-contact-link" target="_blank" href="https://jgreen721dev.com">JGDev721</a>
  {/* </strong> */}
</div>
</StretchShrink>

  )
}

export default SignIn