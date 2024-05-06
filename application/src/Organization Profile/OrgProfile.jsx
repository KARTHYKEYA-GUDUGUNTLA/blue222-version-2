import React, { useState } from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import './OrgProfile.css';
const OrgProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
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
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px'}}>
             
            <div className="col-md-6 col-sm-6 col-xs-12">
                <ol className="breadcrumb" >
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                    <li> Manage Account / Organization DropBox</li>
                </ol>
            </div>
            
    </div>
    
    <div id='content-container' >
    <div >
                <div >
                    <div className='col-md-12' >
                    <div className="page-header" style={{margin:'0px'}} >
                    <h3>Organization Profile</h3>
                </div>
                
                        <div className="page-content page-profile">
                            <div className="page-tabs">
                                <ul className="nav nav-tabs">
                                    <li className={activeTab === 'profile' ? 'active' : ''}>
                                        <a href="#profile" onClick={() => handleTabChange('profile')}>
                                            Org Profile
                                        </a>
                                    </li>
                                    <li className={activeTab === 'update' ? 'active' : ''}>
                                        <a href="#update" onClick={() => handleTabChange('update')}>
                                            Edit Org Profile
                                        </a>
                                    </li>
                                    <li className={activeTab === 'rating' ? 'active' : ''}>
                                        <a href="#rating" onClick={() => handleTabChange('rating')}>
                                            Org Rating & Review
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={`tab-pane fade ${activeTab === 'profile' ? 'active in' : ''}`} id="profile">
                                <div className='scrollable-container'>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-9">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td width="210" className="active">Organization Name</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="active">Phone Number</td>
                                                        <td><span className="bfh-phone" data-country="US">+1</span> 1234566785</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Phone2</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Email1</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Address</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Website</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Organization</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Description</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="210" className="active">Terms and Conditions</td>
                                                        <td width="1570">VSOFT</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 'update' ? 'active in' : ''}`} id="update">
                                <div className='scrollable-container'>
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="control-label">Organization Name</label>
                                        <input id="Organization_Name" name="Organization_Name" className="form-control" type="text" value="VSOFT" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="Phone Number" className="control-label">Phone Number</label>
                                        <select id="countries_phone_select" name="phone_country" className="form-control bfh-countries" data-country="US" style={{ height: '38px' }}>
                                        </select>
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-2">
                                        <label>&nbsp;</label>
                                        <input id="countrycode_1" name="countrycode_1" className="form-control bfh-phone" data-country="countries_phone_select" readOnly onPaste={(e) => e.preventDefault()} type="text" value="+1" />
                                    </div>
                                    <div className="col-md-2">
                                        <label>&nbsp;</label>
                                        <input id="Organization_Phone" name="Organization_Phone" className="form-control bfh-phone" data-format="(ddd) ddd-dddd" onPaste={(e) => e.preventDefault()} type="text" value="1234566785" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <label>Phone 2</label>
                                        <input id="phone_2" name="phone_2" className="form-control" maxLength="10" onKeyPress={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()} type="text" value="" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="control-label">Email 1</label>
                                        <input id="mail" name="Email" className="form-control" type="text" value="testvsoftclient@yopmail.com" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Website</label>
                                        <input id="Organization_Website" name="Organization_Website" className="form-control" type="text" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="control-label">Address 1</label>
                                        <textarea id="Organization_Address" name="Organization_Address" className="form-control" rows="1" cols="50">Winter Garden</textarea>
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Address 2</label>
                                        <textarea id="address2" name="address2" className="form-control" rows="1" cols="50"></textarea>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="control-label">City</label>
                                        <input id="Organization_City" name="Organization_City" className="form-control" type="text" value="Winter Garden" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="control-label">State/Province</label>
                                        <select id="Organization_State" name="Organization_State" className="form-control bfh-states" data-country="countries_phone_select" data-state="FL"></select>
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="control-label">Zip Code</label>
                                        <input id="Organization_Zip_Code" name="Organization_Zip_Code" className="form-control" minLength="4" maxLength="10" onPaste={(e) => e.preventDefault()} type="text" value="34778" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Terms and Conditions URL</label>
                                        <input id="Organization_Terms_cond" name="Organization_Terms_cond" className="form-control" type="url" value="" />
                                        <span className="error-display" style={{ color: 'red' }}></span>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="profile_pic">Organization Picture</label>
                                        <div className="row" style={{ border: '1px solid #D9EDF7', borderRadius: '5px', padding: '3px', marginLeft: '3px', marginRight: '3px' }}>
                                            <div className="col-md-12">
                                                <input className="" name="photo" type="file" />
                                                {/* Hiding the content */}
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div className="col-md-8">
                                        <label>Description</label>
                                        <textarea id="description" name="description" className="form-control" rows="3" cols="50"></textarea>
                                    </div>
                                    <span style={{ color: 'red', marginLeft: '15px' }}>* Indicates a required field</span>
                                </div>
                    
                                <div className="form-group">
                                    {/* Buttons */}
                                    <button id="btn-update" className="btn btn-success" style={{marginRight:'10px'}} >Update</button>
                                    <button id="btn-primary" className="btn btn-primary" >Reset</button>
                                </div>
                            </div>
                            </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 'rating' ? 'active in' : ''}`} id="rating">
                                    {/* Content for Org Rating & Review tab */}
                                    <p style={{ fontWeight: 'bold', fontSize: '20px', paddingTop:'30px' }}>No reviews found.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default OrgProfile;
