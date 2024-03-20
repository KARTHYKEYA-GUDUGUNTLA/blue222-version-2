import React, { useState,useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from './captcha/captcha';
import "react-phone-input-2/lib/bootstrap.css";
import allCountries from './data/countrycode';

const Signup3 = (props) => {
  
    
  const [phoneCountry, setPhoneCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [error, setError] = useState('');
  

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleChange = (event) => {
    setPhoneCountry(event.target.value);
    const countryCode = event.target.value;
    const country = allCountries.find(c => c[1] === countryCode);
    setSelectedCountryCode(country ? country[2] : '');
  };
  const captchaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userInput === captchaText) {
      setVerificationMessage('Captcha is correct!');
      setError('');
    } else {
      setVerificationMessage('Captcha is incorrect. Please try again.');
      setError("Image Verification is incorrect")
    }
  };
 
  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <div className="row s-form-row">
          <div className="col-md-6">
            <label htmlFor="countries_phone_select" className="control-label" style={{ fontWeight: 'bold' }}>Country</label>
            <select 
              className="form-control bfh-countries" 
              value={phoneCountry}
              onChange={handleChange}
            >
            <option value="" disabled></option>
            {allCountries.map(country => (
              <option key={country[1]} value={country[1]}>{country[0]}</option>
            ))}
            </select>
           
          </div>
          
          <div className="col-md-6">
  <label htmlFor="Phone_1" className="control-label">Cell Phone Number</label>
  <div className="d-flex">
    <input 
      id="countrycode_1" 
      name="countrycode_1" 
      className="form-control me-2" 
      value={selectedCountryCode ? `+${selectedCountryCode}` : ''} readOnly 
     
      style={{ width: '20%' }} 
    />
   
    <input 
      className="form-control" 
      id="Phone_1" 
      name="Phone_1" 
      type="text" 
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      style={{ width: '70%' }} 
    />
  </div>
</div>

        </div>
    
        
        <div className="row s-form-row">
        <div className="col-md-6" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <label htmlFor="captcha_input" className="control-label me-2">ImageVerification:</label>
      <span style={{ color: 'red'}}><strong>*</strong></span>
      <Captcha setCaptchaText={setCaptchaText}  />

      </div>
      
        
        <div className="col-md-6">
          <label htmlFor="Referred_by_label" className="control-label">Referred By</label>
          <input 
            className="form-control" 
            id="Referred_by" 
            name="Referred_by" 
            type="text" 
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
          />
        </div>
        <div className="col-md-6">
      <input 
        className="form-control" 
        id="captcha_input" 
        name="captcha_input" 
        type="text"
        value={userInput}
        onChange={handleInputChange}
        required
      />
      {error && <span className="error-display" style={{ color: 'red' }}>{error}</span>}
    </div>
      </div>
      
        <div className="row s-form-row"> 
        <div className="col-md-12">
         <div className="form-group">
        <ReCAPTCHA
        sitekey="6Lcgl5gpAAAAABTQMsFNsJqMX4Z1xjqY80oyC1cP"
        ref={captchaRef}
      />
        </div></div>
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
      </form>
    </div>
  );
};

export default Signup3;





