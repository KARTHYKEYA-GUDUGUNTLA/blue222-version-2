import React from 'react';
import { useState } from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';
import { useDropzone } from 'react-dropzone';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import  './OrganizationDropbox.css'

function OrganizationDropBox() {
    const [linkUrl, setLinkUrl] = useState('');
    const [documentName, setDocumentName] = useState('');
    const [description, setDescription] = useState('');

    const handleLinkUrlChange = (event) => {
        setLinkUrl(event.target.value);
    };

    const handleDocumentNameChange = (event) => {
        setDocumentName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
        }
    });
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
         
     <div >
            <div id="content" >
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
             
            <div className="col-md-6 col-sm-6 col-xs-12">
                <ol className="breadcrumb" >
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} />Dashboard</Link></li>
                    <li>Vendor Win / Loss Ratio</li>
                </ol>
            </div>
        
    </div>
    <div className='content-contianer'>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <div className="panel-title" style={{ padding: '10px', fontWeight: 'bold' }}>Organization DropBox</div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 upload_div">
                                <div className="panel panel-info">
                                    <div className="panel-title" style={{ paddingTop: '10px', paddingLeft: '10px', paddingBottom: '0px' }}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p align="left" className="panel-title">Upload Documents (Drop files on gray box or click gray box below to upload files.)</p>
                                            </div>
                                            <div className="col-md-4">
                                                <button disabled={true} id="action9" className="btn btn-success pull-right" type="button">Upload Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                    <form
                                    {...getRootProps()} 
                                    className="dropzone dz-clickable"
                                    id="myAwesomeDropzone"
                                    encType="multipart/form-data"
                                 >
                                   
                                    <input type="file" {...getInputProps()} multiple style={{ display: 'none' }} />

                                        <div className="dz-default dz-message">
                                        <span>Drop files here to upload</span>
                                        </div>
                                       </form>
                                        <div style={{ height: 'auto', overflowX: 'hidden' }}>
                                            <table className="table">
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-info">
                                    <div className="col-md-12" style={{ backgroundColor: '#d9edf7', paddingBottom: '1px' }}>
                                        <div className="row" style={{ paddingTop: '10px', marginBottom: '7px' }}>
                                            <div className="col-md-8">
                                                <p align="left" className="panel-title">Shareable Drive Link</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <form onSubmit={handleSubmit} >
                                           
                                            <label htmlFor="link_url" className="control-label">Add Shareable Drive Link</label>
                                            <input id="link_url" name="link_url" className="form-control" required="" type="text" value={linkUrl} onChange={handleLinkUrlChange} />

                                            <label htmlFor="document_name" className="control-label">Document Name</label>
                                            <input id="document_name" name="document_name" className="form-control" required="" type="text" value={documentName} onChange={handleDocumentNameChange} />

                                            <label htmlFor="description" className="">Description</label>
                                            <textarea id="description" name="description" style={{ height: '62px' }} className="form-control" rows="2" cols="50" value={description} onChange={handleDescriptionChange}></textarea>
                                            <div style={{ display: 'flex', gap: '10px', paddingTop:'10px' ,flexDirection : 'row-reverse'}}>
                                            <input
                                            id="cancel"
                                            className="btn btn-danger"
                                            type="reset"
                                            value="Reset"
                                            style={{ width: '60px' }}
                                        />
                                            <input
                                                id="updateNotification"
                                                className="btn btn-success"
                                                type="button"
                                                value="Update"
                                                style={{ width: '60px' }}
                                            />
                                           
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default OrganizationDropBox;
