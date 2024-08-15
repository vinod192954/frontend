import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import './index.css';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignVisible,setSignUpVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleIsSignUpVisible=()=>{
    setSignUpVisible((prevState)=>!prevState)
  }

  return (
    <div className="container">
      {/* Left-side section */}
      <div className="welcome-container">
        <h1>Welcome to our community</h1>
        <p>
          Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.
        </p>
        <div className="welcome-footer">
          <p>More than 17k people joined us, it’s your turn</p>
        </div>
      </div>

      {/* Right-side section */}
      {isSignVisible ?( <div className="signup-container">
        <div className="signup-header">
          <h2>Sign up</h2>
          <p>
            Already have an account?  <button className='btn' onClick={toggleIsSignUpVisible}>Sign In</button>
          </p>
        </div>
        <form className="signup-form">
          <label>Full name *</label>
          <input type="text" required placeholder="Enter your full name" />

          <label>Email address *</label>
          <input type="email" required placeholder="Enter your email address" />

          <label>Password *</label>
          <div className="password-input-container">
            <input required
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye/> : <FaRegEyeSlash/>}
            </span>
          </div>

          

         

          <button type="submit">Create your free account</button>
        </form>
      </div>) : <div className="signup-container">
        <div className="signup-header">
          <h2>Sign In</h2>
          <p>
            new User ? Create  an account? <button  className='btn' onClick={toggleIsSignUpVisible}>Sign Up</button>
          </p>
        </div>
        <form className="signup-form">
         
          <label>Email address *</label>
          <input type="email" required placeholder="Enter your email address" />

          <label>Password *</label>
          <div className="password-input-container">
            <input required
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye/> : <FaRegEyeSlash/>}
            </span>
          </div>

         
         
          <button type="submit">Login</button>
        </form>
      </div> }
     
     
    </div>
  );
};

export default Signup;
