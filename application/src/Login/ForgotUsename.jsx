import React from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_new.png';
import { Link } from "react-router-dom";

const ForgotUsername = () => {
  return (
    <div>
      <div className="container">
        <div id="login-container">
        <div className="custom" style={{paddingTop:20}}>
          <a className="text-center" href="https://stagingapp.blue222.com">
            <img alt="logo" className="img-responsive" src={logo}style={{ paddingBottom: '5px !important' }} />
          </a>
          </div>
          <div id="login">
            <form method="POST" action="https://stagingapp.blue222.com/username/reset" acceptCharset="UTF-8" id="forgotusername">
              <input name="_token" type="hidden" value="yZKP8lTRBQshaZqI3A6bDItSScIJTmKo7ZtlFOuw" />
              <p style= {{ color: 'black', fontWeight: 'bold' }}>Type in the email address that you use for your Blue222 account/s, and we will email you all Usernames associated with that email address.</p>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <FontAwesomeIcon icon={faUser} /> 
                  </div>
                  <input type="email" className="form-control" name="femail" id="femail" placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div id="html_element"></div>
                </div>
              </div>
              <div className="form-group">
                <div id="html_element" className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-callback="verifyCaptcha"></div>
                <div id="g-recaptcha-error"></div>
              </div>
              <button type="submit" id="forgot_username_btn" className="btn btn-block bt-login">Forgot Username</button>
              <div className="clearfix"></div>
              <div className="login-modal-footer">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faLock}/> 
                    <Link to="/">Sign In</Link>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faCheck} />
                    <Link to="/createaccount"> Sign Up </Link>
                  </div>
                </div>
              </div>
            </form>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default ForgotUsername;
