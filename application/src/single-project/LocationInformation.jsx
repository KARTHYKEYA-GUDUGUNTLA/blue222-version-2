import { useState } from 'react';
import React from 'react';
import './LocationInformation.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import "react-phone-input-2/lib/bootstrap.css";
import allCountries from '../data/countrycode';

function LocationForm({ formData, handleChange }) {

    const [isSetContract, setIsSetContract] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsSetContract(event.target.checked);
    };
    const unitedStatesCode = allCountries.find(country => country[0] === "United States")[1];
    return (
        <div className="col-sm-8">
            <div className="panel panel-info" style={{ border: '1px solid #ccc', borderRadius: '5px'}}>
                <div className="panel-heading" style={{ backgroundColor: "#d9edf7" }}>
                    <h3 className="panel-title">Location Information</h3>
                </div>
                <div className="panel-body" style={{paddingLeft:'15px',paddingRight:'15px',paddingBottom:'15px'}}>
                    <div className="row">
                       
                        <div className="col-sm-6">

                            <div className="form-group">
                                <label htmlFor="address1">Address Line 1</label>
                                <input
                                    id="address1"
                                    name="address1"
                                    type="text"
                                    className="form-control"
                                    value={formData.address1}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                            {/* Address Line 2 */}
                            <div className="form-group">
                                <label htmlFor="address2">Address Line 2</label>
                                <input
                                    id="address2"
                                    name="address2"
                                    type="text"
                                    className="form-control"
                                    value={formData.address2}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                            {/* Project Description */}
                            <div className="form-group">
                                <label htmlFor="description">Parcel Id numbers</label>
                                
                                <textarea
                                    id="description"
                                    name="description"
                                    className="form-control"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleChange}
                                    style={{ width: '100%', marginBottom: '10px', height:'150px' }}
                                ></textarea>
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
                        </div>
                       
                        {/* Second column */}
                        <div className="col-sm-3">
                            {/* Country */}
                            <div className="form-group">
                                <label htmlFor="country" className='control-label'>Country</label>
                                <select
                                className="form-control bfh-countries"
                                defaultValue={unitedStatesCode}
                              >
                                {/* Add an empty option at the beginning */}
                                <option value="" disabled hidden>
                                  Select a country
                                </option>
                                {/* Iterate through the list of countries and render each as an option */}
                                {allCountries.map((country) => (
                                  <option key={country[1]} value={country[1]}>
                                    {country[0]}
                                  </option>
                                ))}
                              </select>
                                <span className="error-display" style={{ color: 'red' }}></span>
                                
                            </div>

                            {/* City */}
                            <div className="form-group">
                                <label htmlFor="city" className='control-label'>City</label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    className="form-control"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                            {/* Size of Property */}
                            <div className="form-group">
                                <label htmlFor="sizeOfProperty" >Size of Property (Acres)</label>
                                <input
                                    id="sizeOfProperty"
                                    name="sizeOfProperty"
                                    type="text"
                                    className="form-control"
                                    value={formData.sizeOfProperty}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }} ></span>
                            </div>

                            {/* Number of Buildings */}
                            <div className="form-group">
                                <label htmlFor="numberOfBuildings" className='control-label'>Number of Buildings</label>
                                <input
                                    id="numberOfBuildings"
                                    name="numberOfBuildings"
                                    type="text"
                                    className="form-control"
                                    value={formData.numberOfBuildings}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                           
                        </div>

                        {/* Third column */}
                        <div className="col-sm-3">
                            {/* State */}
                            <div className="form-group">
                                <label htmlFor="state" className='control-label'>State</label>
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    className="form-control"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                            {/* Zip Code */}
                            <div className="form-group">
                                <label htmlFor="zip" className='control-label'>Zip Code</label>
                                <i
                                className="bi bi-geo-alt-fill"
                                title="Click to see location on map"
                                style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }}
                                id="show_map"
                                
                              />
                                <input
                                    id="zip"
                                    name="zip"
                                    type="text"
                                    className="form-control"
                                    value={formData.zip}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>

                            {/* Total Building Square Feet */}
                            <div className="form-group">
                                <label htmlFor="totalBuildingSquareFeet">Total Building Square Feet</label>
                                <input
                                    id="totalBuildingSquareFeet"
                                    name="totalBuildingSquareFeet"
                                    type="text"
                                    className="form-control"
                                    value={formData.totalBuildingSquareFeet}
                                    onChange={handleChange}
                                />
                                <span className="error-display" style={{ color: 'red' }}></span>
                            </div>
                             {/* Number of Lots */}
                             <div className="form-group">
                             <label htmlFor="numberOfLots">Number of Lots</label>
                             <input
                                 id="numberOfLots"
                                 name="numberOfLots"
                                 type="text"
                                 className="form-control"
                                 value={formData.numberOfLots}
                                 onChange={handleChange}
                             />
                             <span className="error-display" style={{ color: 'red' }}></span>
                         </div>
                        </div>
                    </div>
                </div>
                <div >
                
                <div className="row" style={{padding:'18px'}}>
                    {/* First "karthy" input */}
                    <div className="col-sm-6">
                        <label htmlFor="numberOfLots1">Assessor Budget (not shown to Vendor)</label>
                        <input
                            id="numberOfLots1"
                            name="numberOfLots1"
                            type="text"
                            className="form-control"
                            value={formData.numberOfLots}
                            onChange={handleChange}
                        />
                        <span className="error-display" style={{ color: 'red' }}></span>
                    </div>

                    {/* Checkbox section */}
                   
                    <div className="col-sm-6">
                    <label htmlFor="numberOfLots1">Suggested Fee</label>
                    <span
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="If you have a suggested fee, please enter it here. Keep in mind that better quality Vendors typically charge higher fees."
                    style={{ color: 'red' }}
                  >
                    (please note)
                  </span>
                    <input
                        id="numberOfLots1"
                        name="numberOfLots1"
                        type="text"
                        className="form-control"
                        value={formData.numberOfLots}
                        onChange={handleChange}
                    />
                    <span className="error-display" style={{ color: 'red' }}></span>
                </div>
                <div className="col-sm-6">
                <input
                    id="setContract"
                    name="setContract"
                    type="checkbox"
                    checked={isSetContract}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="setContract">Set Contract Price Only</label>
                <span
                    className="help-tip"
                    id="profile_setup"
                    data-html="true"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="If this option is selected, the Vendor will receive an RFP notification that allows them only to acknowledge that they wish to accept the project at their standard contract price."
                />
            </div>
         <br ></br>
           <div style={{ paddingTop: '20px' }}>
            <div className="col-sm-3">
            <label htmlFor="numberOfLots1">EPS Risk Rating</label>
            <input
                id="numberOfLots1"
                name="numberOfLots1"
                type="text"
                className="form-control"
                value={formData.numberOfLots}
                onChange={handleChange}
            />
            <span className="error-display" style={{ color: 'red' }}></span>
        </div>
        <div className="col-sm-3">
            <label htmlFor="numberOfLots1">Land Use Code</label>
            <input
                id="numberOfLots1"
                name="numberOfLots1"
                type="text"
                className="form-control"
                value={formData.numberOfLots}
                onChange={handleChange}
            />
            <span className="error-display" style={{ color: 'red' }}></span>
        </div>
        </div>
                </div>


                <div className='row' style={{padding:'18px'}}>
                
                <div className="col-sm-3">
                <label htmlFor="numberOfLots1">Site Contact Name</label>
                <input
                    id="numberOfLots1"
                    name="numberOfLots1"
                    type="text"
                    className="form-control"
                    value={formData.numberOfLots}
                    onChange={handleChange}
                />
                <span className="error-display" style={{ color: 'red' }}></span>
            </div>
            <div className="col-sm-3">
            <label htmlFor="numberOfLots1">Site Contact Email</label>
            <input
                id="numberOfLots1"
                name="numberOfLots1"
                type="text"
                className="form-control"
                value={formData.numberOfLots}
                onChange={handleChange}
            />
            <span className="error-display" style={{ color: 'red' }}></span>
        </div>
        <div className="col-sm-3">
            <label htmlFor="numberOfLots1">Site Contact Phone</label>
            <input
                id="numberOfLots1"
                name="numberOfLots1"
                type="text"
                className="form-control"
                value={formData.numberOfLots}
                onChange={handleChange}
            />
            <span className="error-display" style={{ color: 'red' }}></span>
        </div>
        <div className="col-sm-3">
            <label htmlFor="numberOfLots1">Property Type Complexity</label>
            <input
                id="numberOfLots1"
                name="numberOfLots1"
                type="text"
                className="form-control"
                value={formData.numberOfLots}
                onChange={handleChange}
            />
            <span className="error-display" style={{ color: 'red' }}></span>
        </div>             
                
                
        <div className="form-group col-lg-4" style= {{paddingTop:'20px'}}>
        <label htmlFor="publicOrPrivatePosting">Public or Private Posting</label>
        <div className="form-check-inline">
          <label className="form-check-label" htmlFor="public">
            <input
              type="radio"
              className="form-check-input"
              id="public"
              name="is_public_posting"
              value="1"
              checked={formData.is_public_posting === '1'}
              onChange={handleChange}
            />
            Public
          </label>
          <label
            className="form-check-label"
            htmlFor="private"
            style={{ marginLeft: '10px' }}
          >
            <input
              type="radio"
              className="form-check-input"
              id="private"
              name="is_public_posting"
              value="2"
              checked={formData.is_public_posting === '2'}
              onChange={handleChange}
            />
            Private
          </label>
        </div>
      </div>
                
                
                
                
                </div>
            </div>
            </div>
            
            
        </div>
            
    
    );
}

export default LocationForm;
