import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import AccountingTable from "./AccountingTable";
const ManageTeam = () => {
  
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
      <div id="content-header">
        <ol className="breadcrumb">
          <li>
            <Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress">
              <FontAwesomeIcon icon={faDashboard} /> Dashboard
            </Link>
          </li>
          <li>Manage Account</li>
          <li>Manage Teams</li>
        </ol>
      </div>

      <div id="content-container">
       

        <div className="content">
          <div className="col-md-12">
          <div className="page-header" style={{margin:'0px', marginBottom:'15px'}} >
              <h3 align="left">Manage Team</h3>
            </div>
            <div className="col-md-12">
              <div className="row">
                <form>
                  <div className="col-md-4">
                    <label htmlFor="name" className="control-label">
                      Team Name
                    </label>
                    <input id="name" name="name" className="form-control" style={{ height: '47px' }} type="text" />
                    <span className="error-display" style={{ color: 'red' }}></span>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="Ref Type Category" className="control-label">
                      Ref Type Category
                    </label>
                    <select className="form-control" style={{ height: '47px' }} name="category_ref_type_id">
                      <option value="" selected="selected">
                        Please Select
                      </option>
                      <option value="1">Environmental Site Assessments</option>
                      <option value="2">Property Condition Assessments</option>
                      <option value="3">Environmental Subsurface</option>
                      <option value="4">Environmental Cleanup</option>
                      <option value="5">Environmental - Laboratory</option>
                      <option value="6">Real Estate Services</option>
                      <option value="7">Real estate new category</option>
                      <option value="8">test disp</option>
                      <option value="9">Vsoft test</option>
                      <option value="10">testvsoft</option>
                    </select>
                    <span className="error-display" style={{ color: 'red' }}></span>
                  </div>
                  <div className="col-md-4">
                  <label htmlFor="Select Users" className="control-label">
                    Select Users
                  </label>
                  <select className="form-control" style={{ height: '47px' }} name="category_ref_type_id">
                    <option value="" selected="selected">
                      Please Select
                    </option>
                    <option value="1">Environmental Site Assessments</option>
                    <option value="2">Property Condition Assessments</option>
                    <option value="3">Environmental Subsurface</option>
                    <option value="4">Environmental Cleanup</option>
                    <option value="5">Environmental - Laboratory</option>
                    <option value="6">Real Estate Services</option>
                    <option value="7">Real estate new category</option>
                    <option value="8">test disp</option>
                    <option value="9">Vsoft test</option>
                    <option value="10">testvsoft</option>
                  </select>
                  <span className="error-display" style={{ color: 'red' }}></span>
                </div>

                  
                </form>
              </div>
            </div>
            <div className="col-md-1" style={{marginBottom : '5px'}}>
                    <button className="btn btn-success" type="submit"> Add Team</button>
                  </div>
          </div>
          <AccountingTable />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ManageTeam;
