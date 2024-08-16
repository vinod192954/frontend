import "./index.css"
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const SignInPage=(props)=>{ 
    const [passwordVisible,setPasswordVisible] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')

 const  onChangeLoginUsername=(event)=>{
    setUsername(event.target.value)
   }

 const  onChangeLoginOption=(event)=>{
    setRole(event.target.value)
   }

  const onChangeLoginPassword=(event)=>{
    setPassword(event.target.value)
   }

   const togglePasswordVisibility=()=>{
        setPasswordVisible(!passwordVisible)
   }
 
    const toggleIsSignUpVisible=()=>{
        const {onClickChangeVisibilty} = props 
        onClickChangeVisibilty(false)
    }
   const onSubmitLogin=(event)=>{
        event.preventDefault()
    }



   return (
        <div className="signup-container">
        <div className="signup-header">
          <h2>Sign In</h2>
          <p>
            new User ? Create  an account? <button  className='btn' onClick={toggleIsSignUpVisible}>Sign Up</button>
          </p>
        </div>
        <form className="signup-form" onSubmit={onSubmitLogin}>
         
          <label>Username *</label>
          <input type="text" 
          value={username}
           onChange={onChangeLoginUsername}
            required placeholder="Enter your email address" />

          <label>Password *</label>
          <div className="password-input-container">
            <input required
            value={password}
              onChange={onChangeLoginPassword}
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye/> : <FaRegEyeSlash/>}
            </span>
          </div>
          
          <div>
              <label>Role</label>
              <select value={role} onChange={onChangeLoginOption} className='roleoptions'>
                <option selected>---Select--</option>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
              </div>
         
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default SignInPage