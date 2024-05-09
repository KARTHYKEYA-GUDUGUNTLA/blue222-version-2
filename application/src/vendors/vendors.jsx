import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import Karthy from './Karthy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import './vendors.css'

const handleSearchButtonClick = () => {
    // Logic for handling the button click goes here
    // For example, you might want to disable the button after it's clicked
    document.getElementById('btn_search_vendor').disabled = true;
    // Add more code for the button click event here...
};

function Vendors() {
    return (
        <div className="single">
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
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                    <li>Vendor Win / Loss Ratio</li>
                </ol>
            </div>
        
    </div>
    <div id="content-container">
    <div>
            <div className="panel-body" style={{paddingTop:'0'}}>
            <div className="page-header" style={{margin:'0px' , marginBottom:'15px'}} >
                    <h3>Invite Preferred Vendors</h3>
                </div>
                
                {/* Buttons in one line */}
                <div className="col-md-6">
                    <a className="btn btn-success" href="/firm/reference/single" title="Invite Single Vendor" style={{ marginRight: '10px' }}>
                        Invite Single Vendor
                    </a>
                    <a className="btn btn-success" href="/firm/reference/multiple" title="Invite Multiple Vendors">
                        Invite Multiple Vendors
                    </a>
                </div>
                
                {/* OR in a new line */}
                <div className="row" style={{ marginTop: '10px', paddingTop: '20px' }}>
    <div style={{ width: '50%', textAlign: 'center', paddingTop: '20px' }}>
        <h4>(or)</h4>
    </div>
</div>
                
               
                <div className="row" >
                    <h3 style={{ paddingLeft :'20px' }}>
                        Search Vendors from BLUE222 Database
                    </h3>
                </div>
                
                <div >
                <div className="row" >
                    <div className="col-md-3">
                        <label htmlFor="search_service_capabilities" className="control-label" style={{ paddingLeft :'40px' }}>Service Capabilities</label>
                        <Karthy />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="search_zip_code" style={{marginLeft:'20px'}}>ZIP Code</label>
                        <input
                            id="search_zip_code"
                            className="form-control"
                            name="search_zip_code"
                            type="text"
                            value=""
                            style={{marginLeft:'15px'}}
                        />
                    </div>
                    <div className="col-md-1" style={{ marginTop: '28px',marginLeft:'30px'}}>
                        <p style={{fontWeight:'bold'}}>OR</p>
                    </div>
                    <div className="col-md-3" style={{marginRight :'5px'}}>
                        <label htmlFor="search_city_name">City Name</label>
                        <input
                            id="search_city_name"
                            className="form-control"
                            name="search_city_name"
                            type="text"
                        />
                    </div>
                    <div className="col-md-1" style={{marginTop : '25px',marginRight:'20px'}}>
                        <button
                            className="btn btn-success"
                            id="btn_search_vendor"
                            onClick={handleSearchButtonClick}
                            type="button"
                        >
                            Search Vendors
                        </button>
                    </div>
                </div>
            </div>
            
            </div>
</div>


            </div>
            </div>











        </div>
    );
}

export default Vendors;
