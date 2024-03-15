import React from 'react'
import { useState } from 'react';

const Signup1 = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('');


  const handleChange = setter => event => {
    setter(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.goToNextStep();
  };
  return (
    <div className='card'>
    <form onSubmit={handleSubmit}>
   
    <div className="row s-form-row">
      <div className="col-md-6">
        <label className="control-label" style={{ fontWeight: 'bold', marginBottom: '5px'}} required>First Name</label>
        <span style={{ color: 'red'}}><strong>*</strong></span>
        <input className="form-control" type="text" value={firstName} onChange={handleChange(setFirstName)} required />
      </div>
      <div className="col-md-6">
      <label className="control-label" style={{ fontWeight: 'bold' , marginBottom: '5px'}} required>Last Name</label>
    
        <span style={{ color: 'red'}}><strong>*</strong></span>
        <input className="form-control" type="text" value={lastName} onChange={handleChange(setLastName)} />
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
        type="radio"
        onChange={handleChange(setAccountType)}
      /> Client (manage/hire Vendors)
    </div>
    <div className="col-md-6" style={{ marginTop: '10px' }}>
      <input
        className="form-field Account_Type"
        type="radio"
        onChange={handleChange(setAccountType)}
      /> Vendor (receive work)
    </div>
</div>
    <div className="row s-form-row">
      <div className="col-md-12">
        <label className="control-label"style={{ fontWeight: 'bold', marginBottom: '5px',fontFamily: 'inherit'}} >Email</label>
        <span style={{ color: 'red'}}><strong>*</strong></span>
        <input className="form-control" id="Email" name="Email" type="text" value={email} onChange={handleChange(setEmail)} required />
      </div>
    </div>
    <div className="row s-form-row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <small style={{ color: 'red', display: 'block', paddingTop: '16px' }}><strong>*</strong> Indicates a required field.</small>
    </div>
    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button className="btn btn-primary" style={{ marginRight: '15px' }} type="submit">Continue</button>
      <button className="btn btn-danger" type="button">Back</button>
    </div>
  </div>
    </form>
    </div>
  )
}

export default Signup1


