import React from 'react';
import "./TableGrid.css";

const columnHeaders = [
  { placeholder: 'Follow', dataColumn: '0' },
  { placeholder: 'Filter by Name', dataColumn: '1' },
  { placeholder: 'Filter by Due Date', dataColumn: '2' },
  { placeholder: 'Filter by Status', dataColumn: '3' },
  { placeholder: 'Filter by Type', dataColumn: '4' },
  { placeholder: 'Filter by City', dataColumn: '5' },
  { placeholder: 'Filter by State/Province', dataColumn: '6' },
  { placeholder: 'Filter by Address', dataColumn: '7' },
  { placeholder: 'Filter by Portfolio', dataColumn: '8' },
  { placeholder: 'Filter by Vendor', dataColumn: '9' },
  { placeholder: 'Filter by Contractor/Writer', dataColumn: '10' },
  { placeholder: 'Filter by Team', dataColumn: '11' },
];

const FilterRow = () => {
  return (
    <tr role="row" className="tablesorter-filter-row">
      {columnHeaders.map((header, index) => (
        <td key={index}>
          <input
            type="search"
            placeholder={header.placeholder}
            className="tablesorter-filter"
            data-column={header.dataColumn}
            data-lastsearchtime={new Date().getTime()} 
          />
        </td>
      ))}
    </tr>
  );
};

export default FilterRow;
