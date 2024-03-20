import React, { useState } from 'react';
import './styles.css'

import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import CustomNavbar from './CustomNavbar';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
    accountType: '',
    Username:'',
    password:'',
    confirmpassword:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const goToNextStep = () => setCurrentStep(currentStep + 1);
  const goToPreviousStep = () => {
    setCurrentStep(prevStep => {
      return prevStep > 1 ? prevStep - 1 : prevStep;
    });
  };
  
 
  
  return (
    <div>
    <div className="top-head-home">
    <div style={{paddingRight: '80px' , paddingLeft : '80px', paddingTop:'10px'}}>
      <div className="row">
      <CustomNavbar />
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
          <div className= "stepwizard">
          <div className="stepwizard-row">
          <div className="stepwizard-step">
            <button
              type="button"
              className={`btn btn-circle ${currentStep > 1 ? 'btn-success' : currentStep === 1 ? 'btn-primary' : 'btn-secondary'}`}
            >
              1
            </button>
          </div>
          <div className='step-line'></div>
          <div className="stepwizard-step">
          <button
          type="button"
          className={`btn btn-circle ${currentStep > 2 ? 'btn-success' : currentStep === 2 ? 'btn-primary' : 'btn-secondary'}`}
          disabled={currentStep < 2} 
          style={{ cursor: currentStep < 2 ? 'not-allowed' : 'pointer' }} 
        >
          2 
        </button>
          </div>
          <div className='step-line'></div>
          <div className="stepwizard-step">
            <button
              type="button"
              className={`btn btn-circle ${currentStep >= 3 ? 'btn-primary' : 'btn-secondary'}`}
              disabled={currentStep < 3}
            >
              3
            </button>
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
           
            {currentStep === 1 && (
        <Signup1
          formData={formData}
          handleChange={handleChange}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {currentStep === 2 && (
        <Signup2
          formData={formData}
          handleChange={handleChange}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {currentStep === 3 && (
        <Signup3
          formData={formData}
          handleChange={handleChange}
          goToPreviousStep={goToPreviousStep}
        />
      )}
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

export default SignUp;
