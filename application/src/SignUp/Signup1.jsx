import React from 'react'
import { useState } from 'react';
const Signup1 = (props) => {

  const [emailError, setEmailError] = useState('');
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmail(props.formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    props.goToNextStep();
    const formData1 = {
      firstName: props.formData.firstName,
      lastName: props.formData.lastName,
      email: props.formData.email,
      accountType: props.formData.accountType,
    };
console.log(formData1);
    try {
        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData1),
        });

        if (!response.ok) throw new Error('Form submission failed');

        const data = await response.json();
        console.log('Form submitted successfully:', data);
       
    } catch (error) {
        console.error(error);
    }
  };
  return (
    <div >
    <div className='card'>
    <form onSubmit={handleSubmit}>
   
    <div className="row s-form-row">
      <div className="col-md-6">
        <label className="control-label" style={{ fontWeight: 'bold', marginBottom: '5px'}} required>First Name</label>
        <span style={{ color: 'red'}}><strong>*</strong></span>
        <input className="form-control" type="text"  name='firstName' onChange={props.handleChange} 
         value={props.formData.firstName}required />
      </div>
      <div className="col-md-6">
      <label className="control-label" style={{ fontWeight: 'bold' , marginBottom: '5px'}} required>Last Name</label>
    
        <span style={{ color: 'red'}}><strong>*</strong></span>
        <input className="form-control" type="text" value={props.formData.lastName} onChange={props.handleChange} name="lastName" />
      </div>
    </div>
    <div className="row s-form-row">
    <div className="col-md-12 label-margin">
      <label className="control-label" style={{ fontWeight: 'bold' }} required>Account Type</label>
      <span style={{ color: 'red' }}><strong>*</strong></span>
    </div>
    <div className="col-md-6" style={{ marginTop: '10px' }}>
      <input
        className="form-field Account_Type"
        name="accountType"
        type="radio"
        value="Client"
        checked={props.formData.accountType === "Client"}
        onChange={props.handleChange} 
      /> Client (manage/hire Vendors)
    </div>
    <div className="col-md-6" style={{ marginTop: '10px' }}>
      <input
        className="form-field Account_Type"
        name="accountType"
        type="radio"
        value="Vendor"
        checked={props.formData.accountType === "Vendor"}
        onChange={props.handleChange} 
      /> Vendor (receive work)
    </div>
  </div>
  
    <div className="row s-form-row">
    <div className="col-md-12">
    <label className="control-label" style={{ fontWeight: 'bold', marginBottom: '5px', fontFamily: 'inherit' }}>Email</label>
    <span style={{ color: 'red' }}><strong>*</strong></span>
    <input
    className={`form-control ${props.emailError ? 'is-invalid' : ''}`}
    id="Email"
    name="email"
    type="text"
    value={props.formData.email} 
    onChange={props.handleChange} 
    required
  />
  {emailError && <span className="error-display" style={{ color: 'red' }}>{emailError}</span>}
  </div>
    </div>
    <div className="row s-form-row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <small style={{ color: 'red', display: 'block', paddingTop: '16px' }}><strong>*</strong> Indicates a required field.</small>
    </div>
    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button className="btn btn-primary" style={{ marginRight: '15px' }} type="submit" onSubmit={handleSubmit}>Continue</button>
      <button className="btn btn-danger" type="button" onClick={props.goToPreviousStep}>Back</button>
    </div>
  </div>
    </form>
    </div>
    </div>
  )
}

export default Signup1


