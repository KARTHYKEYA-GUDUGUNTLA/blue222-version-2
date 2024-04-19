import React, { useState } from 'react';
import './Filter/Filter';
import SubFilters from './SubFilters';
import { Collapse } from 'react-bootstrap';

const Karthy = () => {
    const [projectType, setProjectType] = useState('All Project Type');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className="panel-body">
            <div className="col-md-12">
                <div className="row">
                    
                    <div className="col-md-7">
                        <div className="dev-drop">
                            <ul className="nav">
                                <div className="dropdown">
                                    <li className="button-dropdown">
                                        <a href="javascript:void(0)" className="dropdown-toggle" id="select-rfp" onClick={handleToggleDropdown}>
                                            {projectType} <span>▼</span>
                                        </a>
                                        <Collapse in={isDropdownOpen}>
                                            <ul
                                                className="dropdown-menu"
                                                role="menu"
                                                style={{
                                                    maxHeight: '200px', 
                                                    overflowY: 'auto',
                                                }}
                                            >
                                                <SubFilters />
                                            </ul>
                                        </Collapse>
                                    </li>
                                </div>
                            </ul>
                            <span className="error-display" style={{ color: 'red' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Karthy;
