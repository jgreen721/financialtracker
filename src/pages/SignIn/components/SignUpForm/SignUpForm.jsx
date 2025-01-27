import React, {useRef, useState} from 'react'
import { iconHidePassword,iconShowPassword } from '../../../../const';
import { useAuthContext } from '../../../../context/AuthContext';
import "./SignUpForm.css"

const SignUpForm = ({setShowLogin}) => {
  const {signUp} = useAuthContext();
  const formRef = useRef();
  const [showPassword,setShowPassword] = useState(false);



  const handleSignUp = (e)=>{
    e.preventDefault();
    let formData = new FormData(formRef.current)
    let userData ={
      name:formData.get("name"),
      email:formData.get("email"),
      password:formData.get("password")
    }
    // console.log("formData",userData);
    signUp(userData);

  }
  return (
<form ref={formRef} onSubmit={handleSignUp} className="signin-form">
      <h1 className="signin-title">Sign Up</h1>
      <div className="form-div">
        <label className="form-label" htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          id="name"
          name="name"
          defaultValue="ana"
        />
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="email">Email</label>

        <input
          type="text"
          className="form-control"
          placeholder="Your email"
          id="email"
          name="email"
          autoComplete="off"
          defaultValue="anabiz@g.com"

        />
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="password">Password</label>

        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          placeholder="Create Password"
          id="password"
          name="password"
          autoComplete="off"
          defaultValue="pword123"


        />
        <button onClick={(e)=>{
          e.preventDefault();
          setShowPassword(showPassword=>showPassword = !showPassword)}} className="password-btn icon-btn">
        <img src={showPassword ? iconHidePassword : iconShowPassword} alt="img"/>
        </button>
        <small className="form-caption">Password must be at least <span className="bold">8</span> characters</small>
      </div>
      <button className="signin-btn btn">Create Account</button>
      <div className="caption-row">
        <h4 className="label-text">Already have an account?</h4>
        <button  onClick={(e)=>{
      e.preventDefault()
      setShowLogin(true)}} className="link-btn">Login</button>
      </div>
    </form>
  )
}

export default SignUpForm