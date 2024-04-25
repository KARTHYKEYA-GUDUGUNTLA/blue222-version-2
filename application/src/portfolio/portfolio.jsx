import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import './portfolio.css'
import { Link } from "react-router-dom";
function PortfolioComponent({ formData, handleInputChange }) {
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
        <div id='content' >

        <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px', marginBottom:'30px' }}>
             
        <div className="col-md-6 col-sm-6 col-xs-12">
            <ol className="breadcrumb" >
                <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                <li>Post Multiple Project</li>
            </ol>
        </div>
        
</div>

       <div id='content-container'>
<div >
        <div className="panel-body" style={{marginTop:'0px'}}>
        <div className="page-header" style={{margin:'0px'}} >
        <h3 >Multiple Project</h3>
        </div>
            <div>
                <ul>
                    <li>Download the example Excel file and input your data to generate a portfolio.</li>
                    <li>Ensure column names in the uploaded file correspond with those in Blue222's sample Excel sheet.</li>
                </ul>
            </div>
            <br />
            <div className="panel panel-info" style={{marginBottom :'30px'}}>
                <div className="col-md-12" style={{ backgroundColor: '#d9edf7', paddingBottom: '1px' }}>
                    <div className="row" style={{ paddingTop: '10px', marginBottom: '7px' }}>
                        <div className="col-md-8">
                            <p align="left" className="panel-title">Portfolio RFP</p>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <label htmlFor="portfolio_name" className="control-label">Name Your Portfolio</label>
                    <input
                        id="portfolio_name"
                        name="portfolio_name"
                        className="form-control"
                        required
                        type="text"
                       
                        onChange={handleInputChange}
                    />
                    <label htmlFor="upload_portfolio_rfp_excel_file" className="control-label">Upload Portfolio RFP - Excel File</label>
                    <span className="pull-right" style={{ marginRight: '0px !important' }}>
                        <i className="fa fa-file-excel-o" aria-hidden="true" style={{ color: 'green' }}></i>
                        <a href="" download="">
                            Download Portfolio Request for Proposal Upload Template
                        </a>
                    </span>
                    <input
                        id="excel_file"
                        accept=".xls,.xlsx"
                        required
                        name="excel_file"
                        type="file"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
        </div>





        </div>
        </div>
        </div>
    );
}

export default PortfolioComponent;
