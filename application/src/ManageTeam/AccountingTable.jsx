import React from 'react';
import AccountingTableHeader from './AccountingTableHeader';
import AccountingTableBody from './AccountingTableBody';
import './AccountingTable.css';
import AccountingPaginate from './AccountingPaginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const AccountingTable = () => {
    const columns = [
        { name: 'TeamName', width: '145px' },
        { name: 'Ref Type Category', width: '146px' },
        { name: '#Users', width: '149px' },
        { name: 'Created By', width: '145px' },
        { name: 'Status', width: '145px' },
        { name: 'Action', width: '145px' },
      ];
      
    return (
        <div className="col-md-12">
            <div className="portlet">
                <div id="account-overview-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-bordered dataTable no-footer dtr-inline" id="account-overview-table" width="100%" style={{ fontSize: '13px', width: '100%' }} role="grid" aria-describedby="account-overview-table_info">
                            <AccountingTableHeader columns={columns} />
                                <AccountingTableBody />
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AccountingTable;

