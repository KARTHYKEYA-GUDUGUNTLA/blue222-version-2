import React from 'react';
import './AccountingTable.css';

const AccountingTableBody = () => {
    return (
        <tbody>
            <tr className="odd">
            <td colspan="25" style= {{textAlign: 'center', color: '#d9534f', fontWeight: 'bold'}}>No Data Found
            </td>
            </tr>
        </tbody>
    );
}

export default AccountingTableBody;
