import React from 'react';
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
                    >
                        <span style={{ fontWeight: 'bolder' }}>{label.name}</span>
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default AccountingTableHeader;
