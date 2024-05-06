import React from "react";
import "./AccountingTable.css";

const AccountingPaginate = () => {
    return (
        <div className="row">
                        <div className="col-sm-6">
                            <div className="dataTables_info" id="account-overview-table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                        </div>
                        <div className="col-sm-6">
                            <div className="dataTables_paginate paging_simple_numbers" id="account-overview-table_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button previous disabled" aria-controls="account-overview-table" tabIndex="0" id="account-overview-table_previous"><a href="#">Previous</a></li>
                                    <li className="paginate_button next disabled" aria-controls="account-overview-table" tabIndex="0" id="account-overview-table_next"><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    );
}

export default AccountingPaginate;