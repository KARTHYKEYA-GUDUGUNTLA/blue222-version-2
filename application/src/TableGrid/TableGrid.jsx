
import React, { useState } from 'react';
import "./TableGrid.css"; 
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePager from "./TablePager";
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.bootstrap.css';
// import FilterRow from './TableFilterForm';

const TableGrid = () => {
  const [data, setData] = useState([
    {
        follow: "Yes",
        name: "Project A",
        dueDate: "2024-01-01",
        status: "Completed",
        type: "Type A",
        city: "City A",
        stateProvince: "State A",
        address: "1234 Street A",
        portfolio: "Portfolio A",
        vendor: "Vendor A",
        contractorWriter: "Writer A",
        team: "Team A"
    },
]);

const rows = [
  // {
  //     follow: "Yes",
  //     name: "Project A",
  //     dueDate: "2024-01-01",
  //     status: "Completed",
  //     type: "Type A",
  //     city: "City A",
  //     stateProvince: "Telanagana",
  //     address: "1234 Street A",
  //     portfolio: "Portfolio A",
  //     vendor: "Vendor A",
  //     contractorWriter: "Writer A",
  //     team: "Team A"
  // },
  

];



  return (
    <div id='content'>
    <div id="content-container">
    <div className="content">
    <div className="col-md-12">
    <div className='col-md-12'></div>
    <div className="portlet">
      <table className="ui-table-reflow tablesorter table table-bordered hasFilters tablesorter-bootstrap" style = {{fontsize: "13px"}} role="grid">
      <colgroup></colgroup>
        <TableHeader />
        <TableBody rows={rows} />
      </table>
      <TablePager data={data} setData={setData} />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default TableGrid;
