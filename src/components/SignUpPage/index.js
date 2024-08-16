import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./index.css"

const SignUpPage=(props)=>{
    const [passwordVisible,setPasswordVisible] = useState(false)
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')

    const togglePasswordVisibility=()=>{
        setPasswordVisible(!passwordVisible)
    }

   const onChangeUsername=(event)=>{
        setUsername(event.target.value)
    }
    
    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

   const onChangeEmail=(event)=>{
        setEmail(event.target.value)
    }

   const onChangeOptions=(event)=>{
        setRole(event.target.value)
    }


    const toggleIsSignUpVisible=()=>{
        const {onClickChangeVisibilty} = props 
        onClickChangeVisibilty(true)
    }

    const RegisterNewUser=(event)=>{
        event.preventDefault()
    }

    return (
        <div className="signup-container">
        <div className="signup-header">
          <h2>Sign up</h2>
          <p>
            Already have an account?  <button className='btn' onClick={toggleIsSignUpVisible}>Sign In</button>
          </p>
        </div>
        <form className="signup-form" onSubmit={RegisterNewUser}>
          <label>Full name *</label>
          <input type="text" value={username} onChange={onChangeUsername} required placeholder="Enter your full name" />

          <label>Email address *</label>
          <input type="email" value={email} onChange={onChangeEmail} required placeholder="Enter your email address" />

          <label>Password *</label>
          <div className="password-input-container">
              <input required
                value={password}
                onChange={onChangePassword}
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
              />
            
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye/> : <FaRegEyeSlash/>}
            </span>
          </div>

          <div>
              <label>Role</label>
              <select className='roleoptions' value={role} onChange={onChangeOptions}>
                <option selected>---Select--</option>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
              </div>

         
        
          <button type="submit">Create your free account</button>
        </form>
      </div>
    )
}

export default SignUpPage