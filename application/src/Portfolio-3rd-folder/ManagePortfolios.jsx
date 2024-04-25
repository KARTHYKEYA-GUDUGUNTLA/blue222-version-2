import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDashboard, faList } from '@fortawesome/free-solid-svg-icons';
import AccountingTable from "./AccountingTable";
import './Accounting.css';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { Link } from "react-router-dom";
 
const ManagePortfolios = () => {
    const [showComponent, setShowComponent] = useState(false);
 
    const toggleComponent = () => {
        setShowComponent(true);
    };
 
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
        <div id="content">
        <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px', marginBottom:'35px' }}>
        <div className="col-md-6 col-sm-6 col-xs-12">
                <ol className="breadcrumb" >
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faList} /> Portfolios</Link></li>
                    
                </ol>
            </div>
            </div>
 
            <div id="content-container">
                <div className="content">
                    <div className="col-md-12">
                    <div className="page-header" style={{margin:'0px'}} >
                            <h3 align="left">Manage Portfolios</h3>
                        </div>
                        
                        <AccountingTable />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default ManagePortfolios;
 