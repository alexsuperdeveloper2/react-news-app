import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './SignIn.css'

const SignIn = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

 
    
   const handlerSubmit = e => {
      e.preventDefault()
     
   }

    return (
        
   <section className="wrapper">
  <div className="content">
    <header>
      <h1>Welcome back to Puppeteer</h1>
    </header>
    <section>
      <form  className="login-form" onSubmit={handlerSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username or Email</label>
          <input type="text" placeholder="Username or Email" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="input-group"><button type='submit'>Sign In</button></div>
        <div className="social-login">
          <button><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" width={20} /><span>Google</span></button>
        </div>
      </form>
    </section>
    <footer>
      <a href="/" title="Forgot Password">Forgot password ?</a>
      <br/>
      <Link to='sign-up'>
            Don't have an account ? Create one
      </Link>
    </footer>
  </div>
</section>


         
    )
};

export default SignIn;