import React, { useState } from 'react';
const Signup2 = (props) => {
  const { formData, handleChange, goToNextStep, goToPreviousStep } = props;
  const [error, setError] = React.useState('');

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      setError('');

      if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match.');
          return;
      }

      if (formData.password.length < 8) {
          setError('Minimum length of password must be 8');
          return;
      }

      const submitData = {
          username: formData.username,
          password: formData.password,
      };
      props.goToNextStep();
      try {
        const response = await fetch('http://localhost:3000/submit-form2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json(); 
  
        if (!response.ok) {
          throw new Error(data.error || 'Form submission failed');
        }
  
        console.log('Form submitted successfully:', data);
       
      } catch (error) {
        console.error(error);
        setError(error.message); 
      }
    };
  return (
    <div className='card'>
      <form onSubmit={handleFormSubmit}>
        <div id="step2" className="s-steps" style={{ display: 'block' }} data-step="2">
          <div >
            <div >
              <p>Please create your Username and Password. <span style={{ fontSize: 'smaller'}}>(Your Client and Vendor accounts must have different User Names.)</span></p>
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Username" className="control-label"  style={{ fontWeight: 'bold' }}>User Name</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control" id="Username" name="username" type="text" value={formData.username} onChange={handleChange} required />
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Password" className="control-label"  style={{ fontWeight: 'bold' }}>Password</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control" id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
              <p style={{ fontSize: 'smaller', margin: '3px 0' }}>Password is case sensitive and must be at least 8 characters long.</p>
              {error && <span className="error-display" style={{ color: 'red' }}>{error}</span>}
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Confirm_Password" className="control-label"  style={{ fontWeight: 'bold' }}>Confirm Password</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control" id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
              {error && <span className="error-display" style={{ color: 'red' }}>{error}</span>}
            </div>
          </div>
          <div className="row s-form-row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <small style={{ color: 'red', display: 'block', paddingTop: '16px' }}><strong>*</strong> Indicates a required field.</small>
          </div>
          <div className="col-md-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary" style={{ marginRight: '15px' }} type="submit">Continue</button>
            <button className="btn btn-danger" type="button" onClick={props.goToPreviousStep}>Back</button>
          </div>
        </div>
        
        </div>
      </form>
    </div>
  );
};

export default Signup2;
