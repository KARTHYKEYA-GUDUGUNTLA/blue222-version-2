import React, { useState } from 'react';
import './styles.css'
import logo from './images/logo_new.png';
import signInIcon from'./images/signin.png';

const Example = () => {
  // Example state for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('');


  const handleChange = setter => event => {
    setter(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div>
    <div className="top-head-home">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-default no-bg" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              
              <a className="navbar-brand" href="https://stagingapp.blue222.com">
                <img alt="" className="img-responsive" src={logo} style={{ paddingBottom: '5px' }} />
              </a>
            </div>
            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" id="menu-menu-1">
                <li>
                  <a className="btn btn-launch" href="https://stagingapp.blue222.com/login">
                    <span><img src={signInIcon} alt="Sign in" /></span> signin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-md-12 row banner-main">
        <div className="banner-text text-center">
          <h1 style={{ marginBottom: '20px',color:'white' }}>Create Account</h1>
        </div>
      </div>
    </div>
  </div>
  
    <div className="container about_us">
      <div className="col-sm-12 col-md-12" style={{padding: '20px'}}>
        <div className="content">
          <div className="col-md-offset-2" style={{ paddingBottom: '30px', boxSizing:'border-box' }}>
            <div className="stepwizard">
              <div className="stepwizard-row">
                <div className="stepwizard-step">
                  <button type="button" className="btn btn-primary btn-circle">1</button>
                </div>
                <div className="stepwizard-step">
                  <button type="button" className="btn btn-secondary btn-circle" disabled>2</button>
                </div>
                <div className="stepwizard-step">
                  <button type="button" className="btn btn-secondary btn-circle" disabled>3</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="col-md-offset-2">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">Create New Account</div>
              </div>
              <div className="panel-body">
                <form onSubmit={handleSubmit}>
                  <input name="_token" type="hidden" />
                  <div className="row s-form-row">
                    <div className="col-md-6">
                      <label htmlFor="First_Name" className="control-label" style={{ fontWeight: 'bold' }}>First Name</label>
                      <span style={{ color: 'red'}}><strong>*</strong></span>
                      <input className="form-control" id="First_Name" name="First_Name" type="text" value={firstName} onChange={handleChange(setFirstName)} required />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="Last_Name" className="control-label" style={{ fontWeight: 'bold' }} required>Last Name</label>

                      <span style={{ color: 'red'}}><strong>*</strong></span>
                      <input className="form-control" id="Last_Name" name="Last_Name" type="text" value={lastName} onChange={handleChange(setLastName)} />
                    </div>
                  </div>
                  <div className="row s-form-row">
                  <div className="col-md-12">
                    <label htmlFor="Account_Type" className="control-label" style={{ fontWeight: 'bold' }} required>Account Type</label>
                    <span style={{ color: 'red'}}><strong>*</strong></span>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-field Account_Type"
                      id="at_client"
                      name="Account_Type"
                      type="radio"
                      value="Firm_Admin"
                      checked={accountType === 'Firm_Admin'}
                      onChange={handleChange(setAccountType)}
                    /> Client (manage/hire Vendors)
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-field Account_Type"
                      id="at_vendor"
                      name="Account_Type"
                      type="radio"
                      value="Contractor_Admin"
                      checked={accountType === 'Contractor_Admin'}
                      onChange={handleChange(setAccountType)}
                    /> Vendor (receive work)
                  </div>
                </div>
              <div className="col-md-12">
               
              </div>
                  <div className="row s-form-row">
                    <div className="col-md-12">
                      <label htmlFor="Email" className="control-label"style={{ fontWeight: 'bold' }} >Email</label>
                      <span style={{ color: 'red'}}><strong>*</strong></span>
                      <input className="form-control" id="Email" name="Email" type="text" value={email} onChange={handleChange(setEmail)} required />
                    </div>
                  </div>
                  <div className="row s-form-row">
                    <div className="col-md-6">
                      <small style={{ color: 'red', display: 'block', paddingTop: '18px' }}><strong>*</strong> Indicates a required field.</small>
                    </div>
                    <div className="col-md-6">
                    <button id="s-continue-btn" className="btn btn-primary pull-right" style={{ marginRight: '15px' }} type="submit">Continue</button>

                      <button id="s-back-btn" className="btn btn-danger pull-right" type="button">Cancel</button>
                     
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <h4 className="text-center">
      We value your privacy and will not share your information with any other parties.{' '}
      <a href="#/" onClick={(e) => {
        e.preventDefault();
        
      }}>Click here</a> to view our privacy policy.
    </h4>
    </div>
   
    </div>
  );
};

export default Example;
