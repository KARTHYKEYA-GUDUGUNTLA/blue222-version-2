import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import Karthy from './Karthy';

const handleSearchButtonClick = () => {
    // Logic for handling the button click goes here
    // For example, you might want to disable the button after it's clicked
    document.getElementById('btn_search_vendor').disabled = true;
    // Add more code for the button click event here...
};

function Vendors() {
    return (
        <div className="single">
            <Navigation />
            <div className="layout">
                <div id="site-logo" style={{ paddingTop: '10px', paddingBottom: '30px', paddingLeft: '20px' }}>
                    <a href="#"><img src={logo} alt="Logo" style={{ width: '158px', height: '60px' }} /></a>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
            <div className="panel-body" style={{ paddingLeft: '210px' }}>
                <div className="page-header" style={{ margin: '0' }}>
                    <h3>Invite Preferred Vendors</h3>
                </div>
                
                {/* Buttons in one line */}
                <div className="col-md-6" style={{ marginTop: '20px' }}>
                    <a className="btn btn-success" href="/firm/reference/single" title="Invite Single Vendor" style={{ marginRight: '10px' }}>
                        Invite Single Vendor
                    </a>
                    <a className="btn btn-success" href="/firm/reference/multiple" title="Invite Multiple Vendors">
                        Invite Multiple Vendors
                    </a>
                </div>
                
                {/* OR in a new line */}
                <div className="row" style={{ marginTop: '10px', paddingTop: '20px' }}>
    <div style={{ width: '50%', textAlign: 'center', paddingTop: '20px' }}>
        <h4>(or)</h4>
    </div>
</div>
                
                {/* Heading in a new line */}
                <div className="row" >
                    <h3 style={{ paddingLeft :'20px' }}>
                        Search Vendors from BLUE222 Database
                    </h3>
                </div>
                
                <div >
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-4" style={{paddingBottom :'20px'}} >
                        <label htmlFor="search_service_capabilities" className="control-label" style={{ paddingLeft :'40px' }}>Service Capabilities</label>
                        <Karthy />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="search_zip_code">ZIP Code</label>
                        <input
                            id="search_zip_code"
                            className="form-control"
                            name="search_zip_code"
                            type="text"
                            value=""
                        />
                    </div>
                    <div className="col-md-1" style={{ marginTop: '28px' }}>
                        <b>OR</b>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="search_city_name">City Name</label>
                        <input
                            id="search_city_name"
                            className="form-control"
                            name="search_city_name"
                            type="text"
                            value=""
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-md-2" style={{marginTop : '25px'}}>
                        <button
                            className="btn btn-success"
                            id="btn_search_vendor"
                            onClick={handleSearchButtonClick}
                            type="button"
                        >
                            Search Vendors
                        </button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    );
}

export default Vendors;
