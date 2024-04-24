import React from 'react';
import { Dropdown, Badge, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCogs, faSignOutAlt, faChild } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_new.png';
import './Navigation.css'
const Navigation = () => {

    return (
        <div>
        <nav id="top-bar" >

<ul className="nav navbar-nav pull-right">
<li>
  <span id="notif-icon" data-toggle="tooltip" data-placement="auto" title="Notifications">
    <Image src="https://stagingapp.blue222.com/assets/img/icons/Notification_White_Icon.png" height="15" width="15"  />
  </span>
  <Badge pill bg="light" text="dark" id="new_notif_count">2</Badge>
</li>
</ul>

          
            <ul className="nav navbar-nav pull-right">
            <li>
              <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontWeight: 'bold' }} />
              <span style={{ color: 'white', fontWeight: 'bold', marginLeft: '0.5rem' }}>VSOFT</span>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-right">
          <Dropdown as="li" className="dropdown">
            <Dropdown.Toggle as="a" className="dropdown-toggle">
              <FontAwesomeIcon icon={faUser}  style={{cursor:'pointer'}}/> Test client <span className="caret"></span>
            </Dropdown.Toggle>
  
            <Dropdown.Menu align="right" className="dropdown-menu">
            <li>
              <Dropdown.Item href="/profile">
                <FontAwesomeIcon icon={faUser} /> My Profile
              </Dropdown.Item>
            </li>
            
            <li>
              <Dropdown.Item href="/settings">
                <FontAwesomeIcon icon={faCogs} /> Settings
              </Dropdown.Item>
            </li>
            
            <li>
              <Dropdown.Divider />
            </li>
          
            <li>
              <Dropdown.Item href="https://stagingapp.blue222.com/logout">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Dropdown.Item>
            </li>
          </Dropdown.Menu>
          
          </Dropdown>
        </ul>
        </nav>

       
        </div>
      );
    };

export default Navigation
