import React from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import './Dashboard.css'
import Footer from './Footer'
import logo from '../images/logo_new.png';
import Test from './Test'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
    <div> <Navigation /></div>
        <div className="layout">
          <div id="site-logo" style={{paddingTop:'10px',paddingBottom:'30px',paddingLeft:'20px'}}>
            <a href="#">
              <img src={logo} alt="Logo" style={{ width: '158px', height: '60px' }} />
            </a>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
<div style={{paddingLeft:'210px' ,paddingRight:'10px'}}>
       
      
       <Test />
       </div>
        
        </div>
      );
    }


export default Dashboard


