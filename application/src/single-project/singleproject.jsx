import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import './singleproject.css';

import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import LocationForm from './LocationInformation';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
function ProjectForm({formId}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [rfpDueDate, setRfpDueDate] = useState(new Date("2024-04-13T20:00:00"));
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        requiredSkills: '',
        dueDate: '',
        flexibleDueDate: false,
        estimatedTurnTime: '',
        errorsOmissionsInsurance: '0',
        insuranceCoverage: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        zip: '',
        latitude: '',
        longitude: '',
        parcelIdNumbers: '',
        propertySize: '',
        buildingSquareFeet: '',
        numberOfBuildings: '',
        numberOfLots: '',
        assessorBudget: '',
        suggestedFee: '',
        setContract: false,
    });
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
        }
    });
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    // Define the functions for the button actions
function handleMoveAll() {
    console.log('Move all button clicked');
}

function handleMoveSelected() {
    // Your logic for handling the "Move selected" button click goes here
    console.log('Move selected button clicked');
    // Add your desired functionality here
}


    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        setSelectedTypes((prev) =>
            prev.includes(value)
                ? prev.filter((type) => type !== value)
                : [...prev, value]
        );
    };

    // Handle input changes
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        console.log(formData);
    };

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


            <div id='content'>
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
             
            <div className="col-md-6 col-sm-6 col-xs-12">
                <ol className="breadcrumb" >
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                    <li>Vendor Win / Loss Ratio</li>
                </ol>
            </div>
            </div>
            <div id = 'content-container'>
            <div className="scrollable-form" style={{ height: '100%', overflowY: 'auto'}}>
            <div className="panel panel-info" style={{paddingRight: '10px' }}>
            <div style={{ backgroundColor: "#d9edf7", paddingLeft: '10px' }}>
                <div className="row">
            <div className="col-md-5">
            <div className="form-group" style={{ marginTop: '2%', textAlign: 'left' }}>
            <label style={{ fontSize: '12px' }} className="control-label">
              Project Templates
            </label>
            <span class="help-tip" data-toggle="tooltip" data-placement="auto" title="These are templates that you have saved for yourself, if you wish to use the same template for multiple RFPs ."></span>
            <select style={{ width: '50%' , paddingLeft : '30px' }}>
</select>
          
   
          </div>
         </div>
            </div>
          </div>
 
            </div>
        
           <div className="panel panel-info" style={{paddingRight: '10px' }}>
           <div style={{ backgroundColor: "#d9edf7", paddingLeft: '10px' }}>
            <div className="row" style={{ marginTop: "2px"}}>
                <div className="col-md-5">
                    <div className="row">
                        <div className="form-group" align="left" style={{ marginTop: "1%" }}>
                            <div className="col-md-6">
                                <label style={{ fontSize: "12px" }} className="control-label">
                                    Select Type of Project
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="form-group" align="left" style={{ marginTop: "1%" }}>
                            <div className="col-md-4">
                                <label style={{ fontSize: "12px" }} className="control-label">
                                    RFP Bids Due By
                                </label>
                            </div>
                            <div>
                                <DatePicker
                                    selected={rfpDueDate}
                                    onChange={(date) => setRfpDueDate(date)}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: '#FFFFFF',
                                        padding: '10px', // Adjust padding for larger input field
                                        fontSize: '20px' // Adjust font size for larger input text
                                    }}
                                />
                                <span className="error-display" style={{ color: "red", marginLeft: "0px" }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             </div>
          </div>
      

               <div className="panel panel-info" style={{ paddingRight: '15px' }}>
                    <form onSubmit={handleSubmit} className="panel-body">
                        {/* Panel for Job Information */}
                        <div className="col-sm-4">
                        <div className="panel panel-info" style={{ border: '1px solid #ccc', borderRadius: '5px'}}>
                        <div className="panel-heading"  style={{backgroundColor: "#d9edf7"}}>
                            <p className="panel-title">Job Information</p>
                        </div>
                        <div className="panel-body" style={{paddingLeft:'15px',paddingRight:'15px',paddingBottom:'5px'}}>
                            {/* Project Name */}
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Project Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
        
                            {/* Project Description */}
                            <div className="form-group">
                                <label htmlFor="description" className="control-label">Project Description</label>
                                <FontAwesomeIcon
                                icon={faPlusCircle}
                                style={{ fontSize: '24px', cursor: 'pointer' }}
                                title="Word Bank"
                                data-target="#wordBankModel"
                                data-toggle="modal"
                                id="word-bank"
                                
                            />
                                <textarea
                                    id="description"
                                    name="description"
                                    className="form-control"
                                    rows="15"
                                    value={formData.description}
                                    onChange={handleChange}
                                    style={{ width: '100%', marginBottom: '10px', height:"169px"}}
                                ></textarea>
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
        
                            {/* Required Skills / Certifications */}
                            <div className="form-group">
                                <label htmlFor="requiredSkills" className="control-label">Required Skills / Certifications</label>
                                <textarea
                                    id="requiredSkills"
                                    name="requiredSkills"
                                    className="form-control"
                                    rows="5"
                                    value={formData.requiredSkills}
                                    onChange={handleChange}
                                ></textarea>
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
        
                            {/* Deliverables Due Date */}
                            <div className="form-group">
                                <label htmlFor="dueDate">Deliverables Due Date</label>
                                <input
                                    id="dueDate"
                                    name="dueDate"
                                    type="text"
                                    className="form-control"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    style={{ marginBottom: '10px' }}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
        
                            {/* Errors and Omissions Insurance */}
                            <div className="form-group">
                                <label htmlFor="errorsOmissionsInsurance">Errors and Omissions Insurance Required?</label>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="errorsOmissionsInsurance"
                                        value="1"
                                        checked={formData.errorsOmissionsInsurance === '1'}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label" style={{ marginRight: '10px' }}>
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="errorsOmissionsInsurance"
                                        value="0"
                                        checked={formData.errorsOmissionsInsurance === '0'}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>

                        {/* Location Information Section */}
                        <LocationForm formData={formData} handleChange={handleChange} />
                        
                    </form>
                    <span style={{ color: 'red', paddingLeft: '35px',paddingBottom:'40px' }}>
                    * Indicates a required field
                  </span>
                </div>
                <div className="row" >
                <div className="panel panel-info" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <div className="panel-heading" style={{ backgroundColor: "#d9edf7" }}>
                <div class="panel-title" >Attach Documents</div>
                </div>
            </div>
    <div className="col-sm-4" style={{ marginTop: '5px',paddingLeft: '30px', paddingRight: '10px'}}>
    <div className="panel panel-info" style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
    <div className="panel-heading" style={{ backgroundColor: "#d9edf7" }}>
                <div className="panel-title" style={{ textAlign: 'left' }}>
                    Global Documents
                    <span className="help-tip" data-toggle="tooltip" data-placement="auto" title="These are documents that you saved in your Organization Dropbox (see left side menu). Click any of the documents shown in the left-hand column to include them in this RFP."></span>
                </div>
            </div>

            <div className="panel-body">
                <div className="bootstrap-duallistbox-container row moveonselect">
                    {/* Box1 */}
                    <div className="box1 col-md-6">
                        <label htmlFor="bootstrap-duallistbox-nonselected-list_global_templates" style={{ display: 'none' }}></label>
                        <span className="info-container">
                            <span className="info">Available Documents</span>
                        </span>
                        <input className="filter form-control" type="text" placeholder="Filter" />
                        <div className="btn-group buttons">
                        <button type="button" className="btn moveall btn-default" style={{ width: '100%', border: '5px solid' }}>

                        <i className="glyphicon glyphicon-arrow-right"></i>
                        <i className="glyphicon glyphicon-arrow-right"></i>
                    </button>
                    
</div>

                        <select
                            multiple="multiple"
                            id="bootstrap-duallistbox-nonselected-list_global_templates"
                            className="form-control"
                            name="global_templates[]_helper1"
                            style={{ height: '122.222px' }}
                        ></select>
                    </div>

                    {/* Box2 */}
                    <div className="box2 col-md-6">
                        <label htmlFor="bootstrap-duallistbox-selected-list_global_templates" style={{ display: 'none' }}></label>
                        <span className="info-container">
                            <span className="info">Include in RFP</span>
                            
                        </span>
                        <input className="filter form-control" type="text" placeholder="Filter" />
                        <div >
                        <div className="btn-group buttons" >
                            <button type="button" className="btn moveall btn-default" style={{width:'100%'}} >
                                <i className="glyphicon glyphicon-arrow-left"></i>
                                <i className="glyphicon glyphicon-arrow-left"></i>
                            </button>
                        </div>
                        </div>
                        <select
                            multiple="multiple"
                            id="bootstrap-duallistbox-selected-list_global_templates"
                            className="form-control"
                            name="global_templates[]_helper2"
                            style={{ height: '122.222px' }}
                        ></select>
                    </div>
                </div>
                <select
                    className="form-control project_template"
                    multiple="multiple"
                    style={{ marginTop: '-5px', display: 'none' }}
                ></select>
            </div>
        </div>
    </div>

    {/* Project Specific Documents Box */}
    <div className="col-sm-8" style={{ marginTop: '5px',addingLeft: '10px', paddingRight: '30px' }}>
    <div className="panel panel-info" style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
    <div className="panel-heading" style={{ backgroundColor: "#d9edf7" , paddingLeft: '10px' }}>
                <div className="panel-title" style={{ textAlign: 'left' }}>
                    Project Specific Documents - <span style={{ fontSize: '12px' }}>Upload one or more files below</span>
                </div>
            </div>
            <div className="panel-body upload_div">
                {/* Form for file upload */}
                <form
                    {...getRootProps()} // Use the properties provided by the useDropzone hook
                    className="dropzone dz-clickable"
                    id="myAwesomeDropzone"
                    encType="multipart/form-data"
                 >
                    {/* Hidden file input */}
                    <input type="file" {...getInputProps()} multiple style={{ display: 'none' }} />

                    {/* Dropzone message */}
                        <div className="dz-default dz-message">
                        <span>Drop files here to upload</span>
                        </div>
                       </form>
                       </div>
                                   </div>
                                                    </div>
                                 </div>

                                 <div >
                                 <div className="row" style={{ display: 'flex',paddingLeft:'30px' }}>
                                 <div style={{ marginRight: '10px', marginTop: '1%' }}>
                                 <button
                                 id="savetemplate"
                                 className="btn btn-success"
                                 data-toggle="modal"
                                 data-target="#myModal"
                                 type="button"
                             >
                                 Continue
                             </button>
                                 </div>
                                 <div style={{ marginRight: '10px', marginTop: '1%' }}>
                                     <button
                                         id="savetemplate"
                                         className="btn btn-primary"
                                         data-toggle="modal"
                                         data-target="#myModal"
                                         type="button"
                                     >
                                         Save as Draft
                                     </button>
                                 </div>
                                 <div style={{ marginRight: '10px', marginTop: '1%' }}>
                                     <button
                                         id="savetemplate"
                                         className="btn btn-warning"
                                         data-toggle="modal"
                                         data-target="#myModal"
                                         type="button"
                                     >
                                         Save as Template
                                     </button>
                                 </div>
                                 <div style={{ marginTop: '1%' }}>
                                     <button
                                         id="deletedtemplate"
                                         className="btn btn-danger"
                                         data-toggle="modal"
                                         data-target="#myModal1"
                                         type="button"
                                     >
                                         Delete Template
                                     </button>
                                 </div>
                             </div>
                             
                             

                             </div>
                             
            </div>


</div>
</div>











            
        </div>
    );
}

export default ProjectForm;





