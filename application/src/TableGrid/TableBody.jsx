import React from "react";
import "./TableGrid.css"; 
  

const TableBody = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td>{row.follow}</td>
          <td>{row.name}</td>
          <td>{row.dueDate}</td>
          <td>{row.status}</td>
          <td>{row.type}</td>
          <td>{row.city}</td>
          <td>{row.stateProvince}</td>
          <td>{row.address}</td>
          <td>{row.portfolio}</td>
          <td>{row.vendor}</td>
          <td>{row.contractorWriter}</td>
          <td>{row.team}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

