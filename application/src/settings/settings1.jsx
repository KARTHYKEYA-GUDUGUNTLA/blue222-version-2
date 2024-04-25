import React, { useState, useEffect } from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { emailnotifications, textnotifications } from '../data/settingnotifications';
import './settings.css'
function Settings1() {
    const [selectAllSet1, setSelectAllSet1] = useState(false);
    const [selectAllSet2, setSelectAllSet2] = useState(false);
    const [emailNotificationsState, setEmailNotificationsState] = useState(emailnotifications);
    const [textNotifications, setTextNotifications] = useState(textnotifications);

    useEffect(() => {
        const setCheckboxes = (className, value) => {
            const checkboxes = document.querySelectorAll(`.${className} .form-check-input`);
            checkboxes.forEach((checkbox) => {
                checkbox.checked = value;
            });
        };
        setCheckboxes('set1', selectAllSet1);
        setCheckboxes('set2', selectAllSet2);
    }, [selectAllSet1, selectAllSet2]);

    const handleToggleAll = (set) => {
        if (set === 'set1') {
            setSelectAllSet1(true);
        } else if (set === 'set2') {
            setSelectAllSet2(true);
        }
    };

    const handleDeselectAll = (set) => {
        if (set === 'set1') {
            setSelectAllSet1(false);
        } else if (set === 'set2') {
            setSelectAllSet2(false);
        }
    };

    const handleEmailNotificationToggle = (notificationId) => {
        setEmailNotificationsState(prevNotifications => {
            return prevNotifications.map(notification => {
                if (notification.id === notificationId) {
                    return { ...notification, enabled: !notification.enabled };
                }
                return notification;
            });
        });
    };

    const handleTextNotificationToggle = (notificationId) => {
        setTextNotifications(prevNotifications => {
            return prevNotifications.map(notification => {
                if (notification.id === notificationId) {
                    return { ...notification, enabled: !notification.enabled };
                }
                return notification;
            });
        });
    };

    const renderEmailNotificationSettings = () => {
        return emailNotificationsState.map(notification => (
            <div className="form-check" key={notification.id}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={notification.enabled}
                    onChange={() => handleEmailNotificationToggle(notification.id)}
                />
                &nbsp;
                <label className="form-check-label">{notification.title}</label>
            </div>
        ));
    };

    const renderTextNotificationSettings = () => {
        return textNotifications.map(notification => (
            <div className="form-check" key={notification.id}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={notification.enabled}
                    onChange={() => handleTextNotificationToggle(notification.id)}
                />
                &nbsp;
                <label className="form-check-label">{notification.title}</label>
            </div>
        ));
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
                    <li> User Name / Settings </li>
                </ol>
            </div>
        
    </div>
    <div id='content-container'>
            <div className="content" style={{ overflowY: 'auto', maxHeight: '400px', paddingTop: '5px' }}>
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
              <div className="form-group">
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
                        <div style={{ paddingLeft: '20px' }}>
                            <ul className="list-group" style={{ fontSize: '12px' }} >
                                <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none' }}>* Selected checkbox represents enabled notifications.</li>
                                <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none' }}>* Unselected checkbox represents disabled notifications.</li>
                                <li className="list-group-item" style={{ fontWeight: 200, padding: '3px', border: 'none', borderBottom: '1px solid #ddd' }}>* To enable/disable notifications, please click on checkbox.</li>
                            </ul>
                            <h3>List of notifications</h3>
                            <div className="form-group set1" style={{ fontSize: '12px', fontWeight: 'lighter' }}>
                                <div className="checkbox">
                                    <a href="#" onClick={() => handleToggleAll('set1')} id="Select-heading1">
                                    Select All
                                    </a>
                                    &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
                                    <a href="#" onClick={() => handleDeselectAll('set1')} id="DeSelect-heading1">
                                        Deselect All
                                    </a>
                                </div>
                                {renderTextNotificationSettings()}
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
                                    <a href="#" onClick={() => handleToggleAll('set2')} id="Select-heading2">
                                       SelectAll
                                    </a>
                                    &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
                                    <a href="#" onClick={() => handleDeselectAll('set2')} id="DeSelect-heading2">
                                        Deselect All
                                    </a>
                                </div>
                                {renderEmailNotificationSettings()}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
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
            </div>
        </div>
    );
}

export default Settings1;
