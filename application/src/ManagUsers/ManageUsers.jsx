import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import AccountingTable from "./AccountingTable";
import './Accounting.css';

const ManageUsers = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
        <div className="content" style={{paddingLeft:'200px'}}>
        <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px'}}>
             
            <div className="col-md-6 col-sm-6 col-xs-12">
                <ol className="breadcrumb" >
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                    <li> Manage Account / Organization DropBox</li>
                </ol>
            </div>
          
    </div>
            <div id ='content-container'>
            
            <div className="col-md-12">
            <div className="page-header" style={{margin:'0px',marginBottom:'15px'}} >
            <h3 align="left">Manage Users</h3>
        </div>
                <div className="row">
                    <form onSubmit={handleSubmit} id="addteammember">
                        <div className="col-md-3">
                            <label htmlFor="first_name" className="control-label">First Name</label>
                            <input id="first_name" name="first_name" className="form-control" type="text" />
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="last_name" className="control-label">Last Name</label>
                            <input id="last_name" name="last_name" className="form-control" type="text" />
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="email" className="control-label">Email</label>
                            <input id="email" name="email" className="form-control" type="text" />
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="username" className="control-label">User Name</label>
                            <input id="username" name="username" className="form-control" type="text" />
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                        
                        <div className="col-md-2">
                            <label htmlFor="memberrole" className="control-label">Role</label>
                            <select id="memberrole" className="form-control" name="memberrole">
                                <option value="staff">Client Staff</option>
                                <option value="admin">Client Admin</option>
                            </select>
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                        <div className="col-md-2" style={{ marginTop: '28px' }}>
                        <button
                        id="AddTeamMember"
                        className="btn btn-success"
                        type="button"
                    >
                        AddTeamMember
                    </button>
                        </div>
                    </form>
                </div>
                <AccountingTable />
            </div>

            </div>
        </div>
        </div>
    );
};

export default ManageUsers;
