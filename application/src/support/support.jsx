import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { Link } from "react-router-dom";
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactUs = () => {
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
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px'}}>
             
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <ol className="breadcrumb" >
                            <li><FontAwesomeIcon icon={faDashboard} /> &nbsp; Settings</li>
                        </ol>
                    </div>
                
            </div>
        <div id="content-container">
            <div className="col-md-12 row banner-main">
                <div className="text-center">
                    <h3>WE'D LOVE TO HEAR FROM YOU.</h3>
                </div>
            </div>
            <div className="col-md-12 row">
                <div className="col-6">
                    <h3 align="center">Phone: (502) 230-8288</h3>
                    <p><br /></p>
                    <h3 align="center">Email: <a href="mailto:support@blue222.com?Subject=Blue222.com Contact Us" target="_blank">support@blue222.com</a></h3>
                    <p><br /></p>
                    <h3 align="center">Schedule help/demo: <a href="https://calendly.com/blue222" target="_blank">https://calendly.com/blue222</a> </h3>
                    <p><br /></p>
                    <h3 align="center">Office:</h3>
                    <h3 align="center">300 LaFollette Station Dr. S #133<br />Floyds Knobs, IN 47119 </h3>
                </div>
            </div>
        </div>





        </div>
        </div>
    );
};

export default ContactUs;
