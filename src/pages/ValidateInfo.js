export default function validateInfo(values) {
    let errors = {};
  
    if (!values.first_name.trim()) {
      errors.first_name = 'First Name required';
    }
    if (!values.last_name.trim()) {
        errors.last_name = 'Last Name required';
      }
      
      if (!values.username.trim()) {
        errors.username = ' Username  required';
      }
      
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password1) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  

    return errors;
  }