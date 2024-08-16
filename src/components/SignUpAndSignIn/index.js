import React, { useState } from 'react';

import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import './index.css';

const SignupAndSignIn = () => {
    const [isSignInVisibile,setVisibility] = useState(false)
   
    const onClickChangeVisibilty=(value)=>{
      console.log(value)
      setVisibility(value)
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
      
     {isSignInVisibile ? <SignInPage onClickChangeVisibilty={onClickChangeVisibilty}/> : <SignUpPage onClickChangeVisibilty={onClickChangeVisibilty}/>}
     
    </div>
  );
};

export default SignupAndSignIn;
