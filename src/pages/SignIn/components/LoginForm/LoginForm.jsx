import React, {useRef, useState} from 'react'
import { iconHidePassword,iconShowPassword } from '../../../../const';

import { useAuthContext } from '../../../../context/AuthContext'
import "./LoginForm.css"

const LoginForm = ({setShowLogin}) => {
  const formRef = useRef();
  const {signIn} = useAuthContext();
  const [showPassword,setShowPassword] = useState(false);


  const handleSignIn = (e)=>{
      e.preventDefault();
      let formData = new FormData(formRef.current)
      let userData ={
        email:formData.get("email"),
        password:formData.get("password")
      }
      // console.log("formData",userData);
      signIn(userData);
  }
  return (
<form ref={formRef} onSubmit={handleSignIn} className="signin-form login-form">
  <h1 className="signin-title">Login</h1>
  <div className="form-div">
    <label className="form-label" htmlFor="user_email">Email</label>
    <input
      type="text"
      className="form-control"
      placeholder="Your email"
      id="user_email"
      name="email"
      defaultValue="anabiz@g.com"
      autoComplete="off"
    />
  </div>
  <div className="form-div">
    <label className="form-label" htmlFor="user_password">Password</label>

    <input
      type={`${showPassword ? 'text' : 'password'}`}
      className="form-control"
      placeholder="Your Password"
      id="user_password"
      name="password"
      defaultValue="pword123"
      autoComplete="off"

    />
         <button onClick={(e)=>{
          e.preventDefault();
          setShowPassword(showPassword=>showPassword = !showPassword)}} className="password-btn icon-btn">
        <img src={showPassword ? iconHidePassword : iconShowPassword} alt="img"/>
        </button>
  </div>
  <button className="signin-btn btn">Login</button>
  <div className="caption-row">
    <h4 className="label-text">Need to create an account?</h4>
    <button onClick={(e)=>{
      e.preventDefault()
      setShowLogin(false)}} className="link-btn">SignUp</button>
  </div>
</form>


  )
}

export default LoginForm