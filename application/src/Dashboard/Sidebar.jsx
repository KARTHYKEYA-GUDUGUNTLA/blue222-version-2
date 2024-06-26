import React from 'react';
import SidebarItem from './SidebarItem';
import { faChevronRight, faPenToSquare, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import {
  faDashboard,
  faPencilSquareO,
  faGlobe,
  faList,
  faUsers,
  faDollar,
  faBarChartO,
  faLightbulbO,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div id="sidebar-wrapper">
        <nav id="sidebar">
          <div id="main-nav" className="open-active" style={{ maxHeight: '100vh', width: '210px' }}>
            <SidebarItem title="Dashboard" icon={faDashboard} to="/dashboard" />
            <SidebarItem title="Post Project" icon={faPenToSquare} to="#">
              <SidebarItem title="single-project" icon={faChevronRight} to="/single-project" />
              <SidebarItem title="portfolio" icon={faChevronRight} to="/portfolio" />
            </SidebarItem>
            <SidebarItem title="Open Opportunities" icon={faGlobe} to="https://stagingapp.blue222.com/OpenMaps" />
            <SidebarItem title="Portfolios" icon={faList} to="/ManagePortfolios" />
            <SidebarItem title="Preferred Vendors" icon={faUsers} to="/preferred-vendors" >
              <SidebarItem title="Invite Vendors" icon={faChevronRight} to="/invite-vendors" />
              <SidebarItem title="Target Locations" icon={faChevronRight} to="/TargetLocations" />
              <SidebarItem title="Vendor Win/Loss" icon={faChevronRight} to="/vendorloss" />
            </SidebarItem>
            <SidebarItem title="Accounting" icon={faDollar} to="/accounting" >
              <SidebarItem title="Overview" icon={faChevronRight} to="/account" />
              <SidebarItem title="Payment Info" icon={faChevronRight} to="/cardonfile" />
            </SidebarItem >
            <SidebarItem title="Manage Account" icon={faDashboard} to="/manage-account" >
              <SidebarItem title="Manage Users" icon={faChevronRight} to="/usersmanagement" />
              <SidebarItem title="Manage Team" icon={faChevronRight} to="/karthy" />
              <SidebarItem title="Organization Profile" icon={faChevronRight} to="/testing" />
              <SidebarItem title="Org-DropBox" icon={faChevronRight} to="/Organization" />
            </SidebarItem>
            <SidebarItem title="Support" icon={faLightbulb} to="/support" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
