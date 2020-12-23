import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './SignIn.css'
import {auth} from '../firebase'
import { useHistory } from 'react-router-dom'

const SignIn = () => {

  
  

   const [values , setValues] = useState({
     email:'',
     password:'',
   })

   const history = useHistory('')

   
   const {email , password } = values



   const handleChange = e => {
     const {name , value} = e.target
     setValues({...values, [name]:value})
   }
    
   const handlerSubmit = e => {
      e.preventDefault()

      auth.signInWithEmailAndPassword(email , password)
      .then((auth)=>{
        history.push('/profile')
      })
      .catch(err =>{
         console.log(err)
      })
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
          <label htmlFor="username"> Email</label>
          <input type="text" placeholder=" Email" name="email" value={email} onChange={handleChange }  />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password"  value={password} onChange={handleChange}/>
        </div>
        <div className="input-group"><button type='submit'>Sign In</button></div>
      </form>
    </section>
    <footer>
      <Link to='sign-up'>
            Don't have an account ? Create one
      </Link>
    </footer>
  </div>
</section>


         
    )
};

export default SignIn;