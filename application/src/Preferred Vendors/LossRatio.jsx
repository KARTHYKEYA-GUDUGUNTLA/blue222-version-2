import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import './Loss.css';
import TablePager from '../TableGrid/TablePager';
import { Link } from "react-router-dom";
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
const LossRatio = () => {
    return (
        <div className='single'>
        <Navigation />
        <div className="layout">
            <div id="site-logo" style={{ paddingTop: '10px', paddingBottom: '30px', paddingLeft: '20px' }}>
                <a href="#"><img src={logo} alt="Logo" style={{ width: '158px', height: '60px' }} /></a>
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
        <div id="content">
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px'}}>
             
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <ol className="breadcrumb" >
                            <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                            <li>Vendor Win / Loss Ratio</li>
                        </ol>
                    </div>
                
            </div>
            <div id="content-container">
                <div className="content">
                    <div className="col-md-12"  style={{paddingTop:'30px'}}>
                        
                        <div className="portlet">
                            <table className="ui-table-reflow tablesorter table table-bordered tablesorter-bootstrap" style={{ fontSize: '13px' }} role="grid">
                                <colgroup></colgroup>
                                <thead>
                                    <tr role="row" className="tablesorter-headerRow">
                                        <th data-placeholder="Filter by First Name" style={{ width: '25%', userSelect: 'none' }} data-column="0" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Name : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Name <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                        <th data-placeholder="Filter by Email" style={{ width: '15%', userSelect: 'none' }} data-column="1" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Number of times RFP sent : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Number of times RFP sent <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                        <th data-placeholder="Filter by City" style={{ width: '15%', userSelect: 'none' }} data-column="2" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Number of times bid : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Number of times bid <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                        <th data-placeholder="Filter by City" style={{ width: '15%', userSelect: 'none' }} data-column="3" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="% &nbsp;Wins : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">% &nbsp;Wins <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                        <th data-placeholder="Filter by State" style={{ width: '15%', userSelect: 'none' }} data-column="4" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Number of times won : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Number of times won <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                        <th data-placeholder="Filter by State" style={{ width: '15%', userSelect: 'none' }} data-column="5" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Number of Emails sent  : No sort applied, activate to apply an ascending sort"><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Number of Emails sent  <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr>
                                        <td colSpan="10" style={{ textAlign: 'center', background: '#eee', color: '#900', fontSize: 'large' }}>No Record Found</td>
                                    </tr>
                                </tbody>
                            </table>
                            <TablePager />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LossRatio;
