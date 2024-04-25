import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import logo from '../images/logo_new.png';
import Test from './Test';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navigation />
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <div id="site-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="dashboard-content">
            <Test />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
