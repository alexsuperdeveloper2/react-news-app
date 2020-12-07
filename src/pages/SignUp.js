 import React , { useState } from 'react';
 import './SignUp.css'
 import axios from 'axios'


  const SignUp = () => {

    const [email ,setEmail] = useState('')
    const [lastName ,setLastName] = useState('')
    const [firstName ,setFirstName] = useState('')
    const [password1 ,setPassword1] = useState('')
    const [password2 ,setPassword2] = useState('')
     

    const handlerChangeLastName = e => setLastName(e.target.value)
    const handlerChangeFirstName = e => setFirstName(e.target.value)
    const handlerChangeEmail = e => setEmail(e.target.value)
    const handlerChangePassword1 = e => setPassword1(e.target.value)
    const handlerChangePassword2 = e => setPassword2(e.target.value)
   
    const handlerSubmit = e => {
      e.preventDefault()
      const data = {
        email ,
        lastName,
        firstName ,
        password1 ,
        password2 ,
      }
      console.log(data)
    }

    return (
      <>
        <section className="wrapper">
          <div className="content">
            <header>
              <h1>Sign Up to Us</h1>
            </header>
            <section>
              <form  className="login-form"  onSubmit={handlerSubmit}>
                <div className="input-group">
                  <label htmlFor="username">First Name</label>
                  <input type="text" placeholder="First Name"   value={firstName} 
                  onChange={handlerChangeFirstName} />
                </div>
                <div className="input-group">
                  <label htmlFor="username">Last Name</label>
                  <input type="text" placeholder="Last Name"  value={lastName} 
                  onChange={handlerChangeLastName}/>
                </div>
                <div className="input-group">
                  <label htmlFor="username">Username or Email</label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={email}
                    onChange={handlerChangeEmail}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Password"  value={password1} 
                  onChange={handlerChangePassword1}/>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={handlerChangePassword2}
                  />
                </div>
                <div className="input-group">
                  <button type='submit'>Sign up</button>
                </div>
                <div className="social-login">
                  <button>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="google"
                      width={20}
                    />
                    <span>Google</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </>
    );
 }
 

  export default SignUp;
