import React from 'react';


function MyProfile() {
  return (
    <div className="panel panel-info">
      <div className="panel-body">
        <div className="page-content page-profile">
          <div className="page-tabs">
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#profile" id="profile1" data-toggle="tab" style={{ color: '#11a311', fontWeight: 'bold' }}>Profile</a>
              </li>
              <li className="" id="updatetab">
                <a href="#update" id="update1" data-toggle="tab" style={{ color: '#ffa500', fontWeight: 'bold' }}>Edit Profile</a>
              </li>
            </ul>
            <span id="tabstatus" style={{ display: 'none' }}></span>
            <div className="tab-content">
              <div className="tab-pane fade active in" id="profile">
                <div className="row">
                  <div className="col-md-12 col-sm-9">
                    <table className="table table-bordered" id="profile-table">
                      <tbody>
                        <tr>
                          <td className="active">Name</td>
                          <td>Test client</td>
                        </tr>
                        <tr>
                          <td className="active">Email</td>
                          <td>testvsoftclient@yopmail.com</td>
                        </tr>
                        <tr>
                          <td className="active">Cell Phone Number</td>
                          <td><span className="bfh-phone" data-country="US">+1 </span>1234566785<br /><br /></td>
                        </tr>
                        <tr>
                          <td className="active">Phone OS</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">Role</td>
                          <td>Client Admin</td>
                        </tr>
                        <tr>
                          <td className="active">Address</td>
                          <td>Winter Garden, Winter Garden, FL - 34778</td>
                        </tr>
                        <tr>
                          <td className="active">Biography</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">Time Zone</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Name1</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Email1</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Phone1</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Name2</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Email2</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="active">CC Phone2</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
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

export default MyProfile;
