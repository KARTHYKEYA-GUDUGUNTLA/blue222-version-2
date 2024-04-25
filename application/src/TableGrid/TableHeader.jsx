
import React from 'react';
import "./TableGrid.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import FilterRow from './TableFilterForm';

const columnHeaders = [
  {
    dataPlaceholder: 'Follow',
    dataColumn: '0',
    ariaLabel: 'Follow : No sort applied, activate to apply an ascending sort',
    style: { userSelect: 'none' },
    text: 'Follow',
  },
  {
    dataPlaceholder: 'Filter by Name',
    dataColumn: '1',
    ariaLabel: 'Name : No sort applied, activate to apply an ascending sort',
    style: { userSelect: 'none' },
    text: 'Name',
  },
  {
    dataPlaceholder: 'Filter by Due Date',
    dataColumn: '2',
    ariaLabel: 'Due Date : No sort applied, activate to apply an ascending sort',
    style: { width: '14%', userSelect: 'none' },
    text: 'Due Date',
  },

  {
    dataPlaceholder: 'Filter by Status',
    dataColumn: '2',
    ariaLabel: 'Status : No sort applied, activate to apply an ascending sort',
    style: { userSelect: 'none' },
    text: 'Status',
  },

  {
    dataPlaceholder: 'Filter by Type',
    dataColumn: '2',
    ariaLabel: 'Type : No sort applied, activate to apply an ascending sort',
    style: {  userSelect: 'none' },
    text: 'Type',
  },
  
  {
    dataPlaceholder: 'Filter by City',
    dataColumn: '2',
    ariaLabel: 'City : No sort applied, activate to apply an ascending sort',
    style: {  userSelect: 'none' },
    text: 'City',
  },

  {
    dataPlaceholder: 'Filter by State/Province',
    dataColumn: '2',
    ariaLabel: 'State/province : No sort applied, activate to apply an ascending sort',
    style: { width: '14%', userSelect: 'none' },
    text: 'State/province',
  },

  {
    dataPlaceholder: 'Filter by Address',
    dataColumn: '2',
    ariaLabel: 'Address : No sort applied, activate to apply an ascending sort',
    style: {  userSelect: 'none' },
    text: 'Address',
  },

  {
    dataPlaceholder: 'Filter by Province',
    dataColumn: '2',
    ariaLabel: 'Province : No sort applied, activate to apply an ascending sort',
    style: { userSelect: 'none' },
    text: 'Province',
  },

  {
    dataPlaceholder: 'Filter by Vendor(s)',
    dataColumn: '2',
    ariaLabel: 'Vendor(s) : No sort applied, activate to apply an ascending sort',
    style: { width: '14%', userSelect: 'none' },
    text: 'Vendor(s)',
  },

  {
    dataPlaceholder: 'Filter by Contractor/Writers',
    dataColumn: '2',
    ariaLabel: 'Contractors/Writers : No sort applied, activate to apply an ascending sort',
    style: { width: '14%', userSelect: 'none' },
    text: 'Contractor/Writers',
  },


  {
    dataPlaceholder: 'Filter by Team',
    dataColumn: '10',
    ariaLabel: 'Team : No sort applied, activate to apply an ascending sort',
    style: { userSelect: 'none' },
    text: 'Team',
  },
];


const TableHeader = () => {
  return (
    <thead>

      <tr role='row' className="tablesorter-headerRow">
        {columnHeaders.map((header, index) => (
          <th
            key={index}
            data-placeholder={header.dataPlaceholder}
            data-column={header.dataColumn}
            aria-label={header.ariaLabel}
            style={header.style}
            className="tablesorter-header tablesorter-headerUnSorted bootstrap-header"
            tabIndex="0"
            scope="col"
            role="columnheader"
            aria-disabled="false"
            unselectable="on"
            aria-sort="none"
          >
            <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
            <div className="tablesorter-header-inner">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{header.text}</span>
            <div style={{ paddingLeft: '30px' }}>
            <FontAwesomeIcon icon={faSort} className="bootstrap-icon-unsorted" />
            </div>
            </div>
            </div>
            </div>
          </th>
        ))}
      </tr>
      <FilterRow />
    </thead>
  );
};

export default TableHeader;
