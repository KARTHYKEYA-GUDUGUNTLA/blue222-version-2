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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
