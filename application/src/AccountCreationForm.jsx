import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import StepWizard from './StepIndicator';
import './styles.css'

// Individual step components (simplified for brevity)
const StepOne = ({ onNext }) => (
 <div>
 <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header bg-primary text-white">Create Account</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
                <fieldset className="mb-3">
                  <legend>Account Type *</legend>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="accountType" id="client" value="client" required />
                    <label className="form-check-label" htmlFor="client">
                      Client (manage/hire Vendors)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="accountType" id="vendor" value="vendor" required />
                    <label className="form-check-label" htmlFor="vendor">
                      Vendor (receive work)
                    </label>
                  </div>
                </fieldset>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <button type="submit" className="btn btn-primary me-2">Continue</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
                <p className="mt-3">
                  * Indicates a required field.
                </p>
              </form>
            </div>
            <div className="card-footer text-muted">
              We value your privacy and will not share your information with any other parties. 
              <a href="#privacy-policy">Click here to view our privacy policy.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <button className="btn btn-primary" onClick={onNext}>Continue</button>
  </div>
);

const StepTwo = ({ onNext, onPrevious }) => (
  <div>
  <div className="container mt-5">
  <div className="row">
    <div className="col-md-8 offset-md-2">
      <div className="card">
        <div className="card-header bg-primary text-white">Create Account</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
            <fieldset className="mb-3">
              <legend>Account Type *</legend>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="accountType" id="client" value="client" required />
                <label className="form-check-label" htmlFor="client">
                  Client (manage/hire Vendors)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="accountType" id="vendor" value="vendor" required />
                <label className="form-check-label" htmlFor="vendor">
                  Vendor (receive work)
                </label>
              </div>
            </fieldset>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <button type="submit" className="btn btn-primary me-2">Continue</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
            <p className="mt-3">
              * Indicates a required field.
            </p>
          </form>
        </div>
        <div className="card-footer text-muted">
          We value your privacy and will not share your information with any other parties. 
          <a href="#privacy-policy">Click here to view our privacy policy.</a>
        </div>
      </div>
    </div>
  </div>
</div>
  
  
  <div>
    <button className="btn btn-secondary" onClick={onPrevious}>Back</button>
    <button className="btn btn-primary" onClick={onNext}>Continue</button>
  </div>
  </div>
);

const StepThree = ({ onPrevious }) => (
 <div>
 <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header bg-primary text-white">Create Account</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
                <fieldset className="mb-3">
                  <legend>Account Type *</legend>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="accountType" id="client" value="client" required />
                    <label className="form-check-label" htmlFor="client">
                      Client (manage/hire Vendors)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="accountType" id="vendor" value="vendor" required />
                    <label className="form-check-label" htmlFor="vendor">
                      Vendor (receive work)
                    </label>
                  </div>
                </fieldset>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <button type="submit" className="btn btn-primary me-2">Continue</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
                <p className="mt-3">
                  * Indicates a required field.
                </p>
              </form>
            </div>
            <div className="card-footer text-muted">
              We value your privacy and will not share your information with any other parties. 
              <a href="#privacy-policy">Click here to view our privacy policy.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <button className="btn btn-secondary" onClick={onPrevious}>Back</button>
  </div>
);

const Header = () => {
  return(
  <div className="header-container bg-primary text-white d-flex justify-content-between align-items-center p-3">
  <div>
    <img src="logo.png" alt="BLUE922" /> {/* Replace with your actual logo */}
  </div>
  <div className="h4 mb-0">Create Account</div>
  <div>
    <button className="btn btn-outline-light">SIGN IN</button>
  </div>
</div>
  );
};

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator mb-4">
      {[1, 2, 3].map((step) => (
        <span key={step} className={currentStep === step ? 'text-primary' : ''}>
          {step}
        </span>
      ))}
    </div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const previousStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <React.Fragment>
      <Header />
      <StepWizard />
      <div className="container mt-5">
        <StepIndicator currentStep={currentStep} />
        {currentStep === 1 && <StepOne onNext={nextStep} />}
        {currentStep === 2 && <StepTwo onNext={nextStep} onPrevious={previousStep} />}
        {currentStep === 3 && <StepThree onPrevious={previousStep} />}
      </div>
    </React.Fragment>
  );
};

export default MultiStepForm;
