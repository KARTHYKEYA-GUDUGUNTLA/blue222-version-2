import React, { useState } from 'react';
import Myprofile from './Myprofile';
import UpdateProfile from './UpdateProfile';
import Sidebar from '../../Dashboard/Sidebar';
import Navigation from '../../Dashboard/Navigation';
import logo from '../../images/logo_new.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
function MyTabs() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    
    <div className='single'>
<Navigation />
<div className="layout">
    <div id="site-logo" style={{ paddingTop: '10px', paddingBottom: '30px', paddingLeft: '20px' }}>
        <a href="#"><img src={logo} alt="Logo" style={{ width: '158px', height: '60px' }} /></a>
    </div>
    <div className="sidebar">
        <Sidebar />
    </div>
</div>

<div id='content'>
<div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
             
<div className="col-md-6 col-sm-6 col-xs-12">
<ol className="breadcrumb" >
<li><Link to="/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
<li>Profile Information</li>
</ol>
</div>

</div>
<div id='content-container'>
<div className='upper' style={{overflowY: 'auto', maxHeight: '400px' ,paddingTop:'5px'}}>
<div style={{paddingLeft:'10px'}} >
<h3  align="left">Profile Information</h3>
</div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'profile' ? 'active' : ''}`} id="profile"><Myprofile /></div>
        <div className={`tab-pane ${activeTab === 'update' ? 'active' : ''}`} id="update"> <UpdateProfile /></div>
      </div>
    </div>
</div>
    </div>
    </div>
  );
}

export default MyTabs;
