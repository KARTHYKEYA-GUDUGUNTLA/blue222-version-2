import React, { useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Instructions from "./Instructions";
import { useDispatch } from 'react-redux';
import { loginRequest } from '../redux/actions/authActions'; // make sure the path is correct

const Step = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Dispatching login request action");
    
    dispatch(loginRequest(credentials))
      .then(() => {
       
        navigate('/test');
      })
      .catch((error) => {
       setError(error);
        console.error(error);
      });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
    clearError();
  };

  const clearError = () => {
    setError(''); // Clear the error message
  };

  return (
    <div >
    {error && (
      <div className="alert alert-danger" role="alert" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px' }}>
        <span style={{paddingLeft : '180px'}}>{error}</span>
        <button type="button" className="close" onClick={clearError} aria-label="Close" style={{ fontSize: '20px', lineHeight: '1' }}>×</button>
      </div>
    )}
    
      <div id="login">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><FontAwesomeIcon icon={faUser} /></div>
              <input 
                type="text" 
                className="form-control" 
                name="username"
                placeholder="Username" 
                required 
                value={credentials.username} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><FontAwesomeIcon icon={faLock} /></div>
              <input 
                type="password" 
                className="form-control" 
                name="password"
                placeholder="Password" 
                required 
                value={credentials.password} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="custom-control-input" id="rememberme" />
            <label >
              Please keep my account logged in.
            </label>
          </div>
          <button type="submit" className="btn btn-block bt-login">Login</button>
          <div className="clearfix"></div>
          <div className="login-modal-footer">
            <div className="row">
            <div className="col-md-12">
            <div className="col-md-4">
            <FontAwesomeIcon icon={faLock} style={{paddingRight:5}} />
            

            <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <div className="col-md-4">
             <FontAwesomeIcon icon={faLock} style={{paddingRight:5}}/>
            
             <Link to="/forgot-username">Forgot Username?</Link>
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon icon={faCheck} style={{paddingRight:5}} />
             

              <Link to="/CreateAccount">SignUp</Link>
            </div> 
          </div>
            </div>
          </div>
        </form>
        <hr />
        <Instructions />
      </div>
    </div>
  );
}

export default Step;





