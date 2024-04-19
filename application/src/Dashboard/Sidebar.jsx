import React from 'react';
import SidebarItem from './SidebarItem';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='main1'>
      <div id="sidebar-wrapper">
        <nav id="sidebar">
          <div id="main-nav" className="open-active">
        
            <SidebarItem title="Dashboard" icon={faDashboard} to="/dashboard" />
            <SidebarItem title="Post Project" icon={faDashboard} to="#">
            <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
          <SidebarItem title = "portfolio" icon={faChevronRight} to="/portfolio" />
            </SidebarItem>
            
            <SidebarItem title="Open Opportunities" icon={faGlobe} to="/open-opportunities" />
            <SidebarItem title="Portfolios" icon={faList} to="/portfolios" />
            <SidebarItem title="Preferred Vendors" icon={faUsers} to="/preferred-vendors" >
            <SidebarItem title = "Invite Vendors" icon={faChevronRight} to="/ss" />
            <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
            <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
            <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
            </SidebarItem>
            <SidebarItem title="Accounting" icon={faDollar} to="/accounting" />
           
          
            <SidebarItem title="Manage Account" icon={faDashboard} to="/manage-account" >
            <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
          <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
          <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
          <SidebarItem title = "single-project" icon={faChevronRight} to="/single-project" />
          </SidebarItem>
            <SidebarItem title="Support" icon={faDashboard} to="/support"/>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
