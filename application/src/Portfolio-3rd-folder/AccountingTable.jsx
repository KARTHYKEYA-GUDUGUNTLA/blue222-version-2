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
        { name: 'Portfolio Name', sorting: 'ascending', width: '145px' },
        { name: 'Projects', sorting: 'ascending', width: '146px' },
        { name: 'Created By', sorting: 'ascending', width: '149px' },
       
        { name: 'Created Date', sorting: 'ascending', width: '146px' },
        { name: 'Action', sorting: 'ascending', width: '130px' },
    ];
    return (
        <div className="col-md-12">
            <div className="portlet">
                <div id="account-overview-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="dataTables_length" id="account-overview-table_length">
                                <label>Show &nbsp;
                                    <select name="account-overview-table_length" aria-controls="account-overview-table" className="form-control input-sm" >
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="-1">All</option>
                                    </select> entries
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div id="account-overview-table_filter" className="dataTables_filter">
                                <label>Search:
                                    <input type="search" className="form-control input-sm" placeholder="Search..." aria-controls="account-overview-table" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-bordered dataTable no-footer dtr-inline" id="account-overview-table" width="100%" style={{ fontSize: '13px', width: '100%' }} role="grid" aria-describedby="account-overview-table_info">
                            <AccountingTableHeader columns={columns} />
                                <AccountingTableBody />
                            </table>
                        </div>
                    </div>
                    <AccountingPaginate />
                </div>
            </div>
        </div>
    );
}

export default AccountingTable;

