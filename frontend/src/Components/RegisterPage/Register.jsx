import React from 'react'
// import "./Login.css"
import image from "../../assets/loginpageimage.png";
import logo from "../../assets/WITH ART-10 2.png";
const Register = () => {
  return (
    <div className="login">
      <div className="Login_left">
        <img src={logo} alt="logo" className="logo" />
        <img src={image} className="loginimage" />
       
      </div>
      <div className="Login_right">
        <h3 className="loginhead">Create An account</h3>
        <input type="text" placeholder="Enter Username" className="input"/>
      <input type="email" placeholder="Enter Email" className="input"/>
      <input type="text" placeholder="Enter Password" className="input"/>
    
        <div className="button">
      <button className="loginbutton">SIGN UP</button>
      <button className="loginbutton registerbutton"> Register With Google</button>
      </div>
      <div className="link">
        <p>Already Have an Account ? <a href="#">Sign in</a> </p>
      </div>


      </div>
    </div>
  )
}

export default Register