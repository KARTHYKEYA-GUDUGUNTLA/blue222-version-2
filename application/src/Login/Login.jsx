import React from 'react';

import Step from './Step';
import logo from '../images/logo_new.png';

const Login = () => {

  return (

    <div className="container" style={{color:'black' , paddingLeft:'150px'}}>
      <div className="row">
        <div className="col-md-8 col-md-offset-2" style={{ textAlign: 'center' , paddingTop:20}}>
          <a href="https://stagingapp.blue222.com">
            <img alt="logo" src={logo} style={{ paddingBottom: '5px' }} className="img-responsive" />
          </a>
          <Step />
        </div>
      </div>
    </div>

  );
};

export default Login;
