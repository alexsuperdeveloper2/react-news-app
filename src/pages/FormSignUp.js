import React, { useState } from 'react';
import Profile from './Profile';
import SignUpForm from './SignUpForm';




const FormSignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)


    function submitForm() {
        setIsSubmitted(true);
      }
    return (
        <div>
             {!isSubmitted ? (
          <SignUpForm submitForm={submitForm} />
        ) : (
         <Profile/>
        )}
        </div>
    );
};

export default FormSignUp;