import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import './AccountingTable.css';

const AccountingTableHeader = ({ columns }) => {
    return (
        <thead>
            <tr role="row">
                {columns.map((label, index) => (
                    <th
                        key={index}
                        className="sorting"
                        tabIndex="0"
                        aria-controls="account-overview-table"
                        rowSpan="1"
                        colSpan="1"
                        style={{ width: label.width || 'auto' }}
                        aria-label={`${label.name}: activate to sort column ${label.sorting}`}
                    >
                        {label.name}
                        <FontAwesomeIcon icon={faSort} className="bootstrap-icon-unsorted" style={{ paddingLeft: '30px' }} />
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default AccountingTableHeader;

