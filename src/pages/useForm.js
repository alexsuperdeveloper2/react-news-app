import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../firebase.js'



const useForm = (callback, validate) => {

  const history = useHistory('')
  const [values, setValues] = useState({
    last_name: '',
    first_name: '',
    email: '',
    password: '',
    
  });

  const {last_name , first_name , email , password } = values
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

 const handleSubmit = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email , password)
    .then(auth =>{
      if(auth.user){
        auth.user.updateProfile({
          displayName: first_name + " " + last_name
        }).then(s =>{
          history.push('/profile')
        })
      }
    })
    .catch(e =>{
        console.log(e)
    })
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;