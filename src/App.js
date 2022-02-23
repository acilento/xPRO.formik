import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      passoword: ''
    }, 
    onSubmit: values => {
      document.getElementById('success').innerHTML = "Login Successful";
    },
    validate: values => {
      let errors = {};
      document.getElementById('success').innerHTML = "";
      
      if (!values.email) {
        errors.email = 'Field required';
      } else {
        
        const validateEmail = (email) => {
          return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        };

        if (!validateEmail(values.email)) {
          errors.email = 'Username should be an email';
        }
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div>
      <div id="success"></div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}

        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
