import React from 'react';
import './styles.css';

const StepWizard = ({ currentStep, goToStep }) => {
  return (
    <div className="col-md-8 offset-md-2" style={{ paddingBottom: '30px' }}>
      <div className="stepwizard">
        <div className="stepwizard-row">
          {[1, 2, 3].map((step) => (
            <div key={step} className="stepwizard-step">
              <button
                type="button"
                className={`btn ${currentStep === step ? 'btn-primary' : 'btn-secondary'} btn-circle`}
                onClick={() => goToStep(step)}
                disabled={currentStep < step}
              >
                {step}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepWizard;
