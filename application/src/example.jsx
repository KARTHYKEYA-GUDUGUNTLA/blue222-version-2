import React, { useState } from 'react';
import './styles.css'
import logo from './images/logo_new.png';
import signInIcon from'./images/signin.png';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';

const Example = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep(currentStep + 1);
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
              className={`btn btn-circle ${currentStep > 2 ? 'btn-success ' : currentStep === 2 ? 'btn-primary ' : 'btn-secondary '}`}
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
            {currentStep === 1 && <Signup1 goToNextStep={goToNextStep} />}
            {currentStep === 2 && <Signup2 goToNextStep={goToNextStep}/>}
            {currentStep === 3 && <Signup3 />}
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
