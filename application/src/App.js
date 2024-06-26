import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotUsername from './Login/ForgotUsename';
import ForgotPassword from './Login/ForgotPassword';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import ProjectForm from './single-project/singleproject';
import PortfolioComponent from './portfolio/portfolio';
import Dropdown from './trash';
import Vendors from './vendors/vendors';
import ContactUs from './support/support';
import ManageUsers from './ManagUsers/ManageUsers';
import CardOnFile from './Accounting/Accounting';
import Settings from './settings/settings';
import Settings1 from './settings/settings1';
import MyTabs from './settings/Profile/Profile';
import OrganizationDropBox from './OrganizationDropBox/OrganizationDropbox';
import AccountingPage from './Accounting Overview/AccountingPage';
import LossRatio from './Preferred Vendors/LossRatio';
import ManagePortfolios from './Portfolio-3rd-folder/ManagePortfolios';
import TargetLocations from './TargetLocations/TargetLocations';
import ManageTeam from './ManageTeam/ManageTeam';
import OrgProfile from './Organization Profile/OrgProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-username" element={<ForgotUsername />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/CreateAccount" element={<SignUp />} />
          <Route path='/test' element={<Dashboard />} />
          <Route path='/single-project' element={<ProjectForm />} />
          <Route path='/portfolio' element = {<PortfolioComponent />} />
          <Route path='dummy' element = {<Dropdown />} />
          <Route path='/invite-vendors' element = {<Vendors />} />
          <Route path='/support' element={<ContactUs />} />
          <Route path='/usersmanagement' element = {<ManageUsers />}/>
          <Route path='/cardonfile' element={<CardOnFile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='settings1' element={<Settings1 />} />
          <Route path='/profile' element={<MyTabs />} />
          <Route path='/Organization' element={<OrganizationDropBox />} />
          <Route path= '/account'  element={<AccountingPage />} />
          <Route path='/vendorloss' element={<LossRatio />} />
          <Route path='/ManagePortfolios' element={<ManagePortfolios />} />
          <Route path='/TargetLocations' element={<TargetLocations />} />
          <Route path='/karthy' element = {<ManageTeam />} />
          <Route path='/testing' element ={<OrgProfile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
