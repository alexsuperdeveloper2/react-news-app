 import React  from 'react';
 import './SignUp.css'
 import validate from '../pages/ValidateInfo.js';
 import useForm from './useForm';

  const SignUpForm = ({submitForm}) => {

    const  {handleChange, handleSubmit, values, errors} = useForm(
      submitForm,
      validate
    )


    

    return (
      <>
        <section className="wrapper">
          <div className="content">
            <header>
              <h1>Sign Up to Us</h1>
            </header>
            <section>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="username">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                  />
                  {errors.first_name && <p>{errors.first_name}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="username">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChange}
                    name="last_name"
                  />
                  {errors.last_name && <p>{errors.last_name}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="username"> Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder=" Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                </div>
          
                <div className="input-group">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </>
    );
  };
 

  export default SignUpForm;
