import React from 'react';
import logo from '../images/logo_new.png';
import signInIcon from '../images/signin.png';
import { Link} from 'react-router-dom';
import './styles.css'
const CustomNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-default no-bg" role="navigation">
        <div className="container-fluid">
        <div className='navi'>
          <div className="navbar-header">
            <a className="navbar-brand" href="https://stagingapp.blue222.com">
              <img alt="Logo" className="img-responsive" src={logo} style={{ paddingBottom: '5px',paddingRight : '20px' }} />
            </a>
          </div>
          <div className="navbar-header" style={{paddingRight:100,paddingBottom:25}}>
                 <Link className='btn-btn-launch' to="/">
                  <span><img src={signInIcon} alt="Sign in" /></span> 
                  <span style={{color:'white'}}>SIGNIN</span>
                  </Link>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
