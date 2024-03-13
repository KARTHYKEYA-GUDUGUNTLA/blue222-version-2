import React, { useState } from 'react';

const Signup2 = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
        props.goToNextStep();
  };

  return (
    <div className='card'>
      <form onSubmit={handleFormSubmit}>
        <div id="step2" className="s-steps" style={{ display: 'block' }} data-step="2">
          <div className="row s-form-row">
            <div className="col-md-12">
              <p>Please create your Username and Password. <span style={{ fontSize: 'smaller', margin: '3px 0' }}>(Your Client and Vendor accounts must have different User Names.)</span></p>
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Username" className="control-label"  style={{ fontWeight: 'bold' }}>User Name</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control" id="Username" name="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Password" className="control-label"  style={{ fontWeight: 'bold' }}>Password</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              
              <p style={{ fontSize: 'smaller', margin: '3px 0' }}>Password is case sensitive and must be at least 8 characters long.</p>
              {error && <span className="error-display" style={{ color: 'red' }}>{error}</span>}
            </div>
          </div>
          <div className="row s-form-row">
            <div className="col-md-12">
              <label htmlFor="Confirm_Password" className="control-label"  style={{ fontWeight: 'bold' }}>Confirm Password</label><span style={{ color: 'red'}}><strong>*</strong></span>
              <input className="form-control"  type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
              {error && <span className="error-display" style={{ color: 'red' }}>{error}</span>}
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
        
        </div>
      </form>
    </div>
  );
};

export default Signup2;
