import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';

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
        <div className="content" style={{paddingLeft:'210px'}}>
            <div >
                <h3 align="left">Manage Users</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <form onSubmit={handleSubmit} id="addteammember">
                        <div className="col-md-2">
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
                            <input id="add_team_member" className="btn btn-success btn-lg"  value="Add Team Member" name="add_team_member" form="addteammember" type="submit" />
                        </div>
                    </form>
                </div>
              
            </div>
        </div>
        </div>
    );
};

export default ManageUsers;
