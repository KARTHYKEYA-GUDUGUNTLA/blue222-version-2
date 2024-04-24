
import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { useState } from 'react';


function Settings() {
    const [selectAllSet1, setSelectAllSet1] = useState(false);
    const [selectAllSet2, setSelectAllSet2] = useState(false);

    const handleSelectAllSet1 = () => {
        const checkboxes = document.querySelectorAll('.set1 .form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        });
        setSelectAllSet1(true);
    };

    const handleDeselectAllSet1 = () => {
        const checkboxes = document.querySelectorAll('.set1 .form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        setSelectAllSet1(false);
    };

    const handleSelectAllSet2 = () => {
        const checkboxes = document.querySelectorAll('.set2 .form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        });
        setSelectAllSet2(true);
    };

    const handleDeselectAllSet2 = () => {
        const checkboxes = document.querySelectorAll('.set2 .form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        setSelectAllSet2(false);
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
    <div className="content" style={{paddingLeft:'200px',overflowY: 'auto', maxHeight: '500px' ,paddingTop:'5px'}}>
      <div className="col-sm-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Change Password</div>
          </div>
          <div className="panel-body">
            <form  id="changepassword">
              <div className="form-group">
                <input type="password" className="form-control" name="password" id="current_password" placeholder="Current Password" />
              </div>
              <div className="form-group">
                <span className="error-display" style={{ color: 'red' }}></span>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="new_password" id="new_password" placeholder="New Password" />
              </div>
              <div className="form-group">
                <span className="error-display" style={{ color: 'red' }}></span>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="new_password_confirmation" id="confirm_password" placeholder="Confirm New Password" />
              </div>
              <div className="form-group">
              <input
              id="updateNotification"
              className="btn btn-success"
              type="button"
              value="Update"
              style={{ width: '70px' }} 
          />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-sm-8">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Notifications Settings</div>
          </div>
          <div className="panel-body" style={{paddingBottom:'0px'}}>
          
          <p>* Please select which notifications you would like to receive..</p>
            <div className="col-sm-6">
              <h3 style={{padding :'0px'}}>List of Teams</h3>
              <div className="tab-pane" style={{ fontSize: '14px', fontWeight: 'normal'}}>
                No Teams.
              </div>
            </div>

            <div className="col-sm-6">
              <h3>My Projects</h3>
              <div className="form-group set1">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input"  />
                  &nbsp;
                  <label className="form-check-label">My Projects</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  &nbsp;
                  <label className="form-check-label">Tagged to Follow Projects</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Email Notifications Settings</div>

          </div>
          <div style={{paddingLeft: '20px'}}>
          <ul className="list-group" style={{fontSize : '11px'}} >
  <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none' }}>* Selected checkbox represents enabled notifications.</li>
  <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none' }}>* Unselected checkbox represents disabled notifications.</li>
  <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none', borderBottom: '1px solid #ddd' }}>* To enable/disable notifications, please click on checkbox.</li>
</ul>

            <h3>List of notifications</h3>
            <div className="form-group set1" style={{ fontSize: '12px', fontWeight: 'lighter' }}>
            <div className="checkbox">
            <a href="#" onClick={handleSelectAllSet1} id="Select-heading1">
              Select All
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#" onClick={handleDeselectAllSet1} id="DeSelect-heading1">
              Deselect All
            </a>
          </div>
    

            <div className="form-check" style= {{fontWeight:'lighter'}}>
            <input type="checkbox" className="form-check-input" />
            &nbsp;
            <label className="form-check-label">Vendor Submitted Proposal on Blue222</label>
          </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input"  />
                &nbsp;
                <label className="form-check-label">RFP Declined on Blue222</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              &nbsp;
              <label className="form-check-label">RFP Restored on Blue222</label>
            </div>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            &nbsp;
            <label className="form-check-label">Reply message notification from Blue222 website</label>
          </div>
          <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <label className="form-check-label">Message notification from Blue222 website</label>
        </div>
        <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        &nbsp;
        <label className="form-check-label">Dispute review message notification from Blue222 website</label>
      </div>
      <div className="form-check">
      <input type="checkbox" className="form-check-input" />
      &nbsp;
      <label className="form-check-label">Document Uploaded in Blue222</label>
    </div>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" />
    &nbsp;
    <label className="form-check-label">Vendor Accepted Directly Assigned Project on Blue222</label>
  </div>
  <div className="form-check">
  <input type="checkbox" className="form-check-input" />
  &nbsp;
  <label className="form-check-label">Job Completed by Vendor on Blue222</label>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" />
&nbsp;
<label className="form-check-label">Site Visit Schedule on Blue222</label>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" />
&nbsp;
<label className="form-check-label">Updated Site schedule visit on Blue222</label>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" />
&nbsp;
<label className="form-check-label">Contractor / Writer cancelled assignment</label>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" />
&nbsp;
<label className="form-check-label">Contractor / Writer accept assignment</label>
</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Text Notification Settings</div>
          </div>
          <div className="panel-body">
            <h3>List of notifications</h3>
            <div className="form-group set2">
            <div className="checkbox">
            <a href="#" onClick={handleSelectAllSet2} id="Select-heading1">
              Select All
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#" onClick={handleDeselectAllSet2} id="DeSelect-heading1">
              Deselect All
            </a>
          </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" />
                &nbsp;
                <label className="form-check-label">Message notification from Blue222 website</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input " />
                &nbsp;
                <label className="form-check-label">Reply message notification from Blue222 website</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input " />
                &nbsp;
                <label className="form-check-label">Vendor Submitted Proposal on Blue222</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input " />
                &nbsp;
                <label className="form-check-label">Document Upload Notification from Blue222 website</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input " />
                &nbsp;
                <label className="form-check-label">Vendor Accepted Directly Assigned Project on Blue222</label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input " />
                &nbsp;
                <label className="form-check-label">Site Visit Schedule on Blue222</label>
              </div>
              <div className="form-check">
                <input type="checkbox"  className="form-check-input" />
                &nbsp;
                <label className="form-check-label">Updated Site schedule visit on Blue222</label>
              </div>
             
             
            </div>
            
        
        
        
          </div>
          
        </div>
        <div style={{ display: 'flex', gap: '10px'}}>
            <input
                id="updateNotification"
                className="btn btn-success"
                type="button"
                value="Update"
                style={{ width: '70px' }} 
            />
            <input
                id="cancel"
                className="btn btn-danger"
                type="reset"
                value="Reset"
                style={{ width: '70px' }} 
            />
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Settings;
