import React, { useState } from 'react';

const Dropdown = () => {
    const [expandedPanels, setExpandedPanels] = useState({});
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const togglePanel = (panelId) => {
        setExpandedPanels((prevState) => ({
            ...prevState,
            [panelId]: !prevState[panelId],
        }));
    };

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        setSelectedCheckboxes((prevState) => {
            if (prevState.includes(value)) {
                return prevState.filter((item) => item !== value);
            } else {
                return [...prevState, value];
            }
        });
    };

    return (
        <div className="dropdown">
            <li className="button-dropdown">
                <a href="javascript:void(0)" className="dropdown-toggle active" id="select-rfp">
                    Select RFP Type
                    <span>▼</span>
                </a>
                <ul className="dropdown-menu" role="menu" style={{ maxHeight: '287px', display: 'block' }}>
                    {/* Environmental Site Assessments */}
                    <li>
                        <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading0">
                                    <h4 className="panel-title">
                                        <a
                                            role="button"
                                            data-toggle="collapse"
                                            href="#collapse0"
                                            aria-expanded={expandedPanels[0] || false}
                                            aria-controls="collapse0"
                                            onClick={() => togglePanel(0)}
                                            className={expandedPanels[0] ? 'expanded' : ''}
                                        >
                                            <i className="more-less glyphicon glyphicon-plus"></i>
                                            Environmental Site Assessments
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    id="collapse0"
                                    className={`panel-collapse collapse ${expandedPanels[0] ? 'in' : ''}`}
                                    role="tabpanel"
                                    aria-labelledby="heading0"
                                >
                                    <div className="panel-body">
                                        <ul>
                                            {/* Add content or inputs for this section */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Property Condition Assessments */}
                    <li>
                        <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading1">
                                    <h4 className="panel-title">
                                        <a
                                            role="button"
                                            data-toggle="collapse"
                                            href="#collapse1"
                                            aria-expanded={expandedPanels[1] || false}
                                            aria-controls="collapse1"
                                            onClick={() => togglePanel(1)}
                                            className={expandedPanels[1] ? 'expanded' : ''}
                                        >
                                            <i className="more-less glyphicon glyphicon-plus"></i>
                                            Property Condition Assessments
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    id="collapse1"
                                    className={`panel-collapse collapse ${expandedPanels[1] ? 'in' : ''}`}
                                    role="tabpanel"
                                    aria-labelledby="heading1"
                                >
                                    <div className="panel-body">
                                        <ul>
                                            <li>
                                                <input
                                                    name="search_ref_type[]"
                                                    value="3"
                                                    type="checkbox"
                                                    className="dev-ref-types search_ref_type"
                                                    onChange={handleCheckboxChange}
                                                    checked={selectedCheckboxes.includes("3")}
                                                />
                                                PCA Complete ASTM
                                            </li>
                                            <li>
                                            <input
                                                name="search_ref_type[]"
                                                value="3"
                                                type="checkbox"
                                                className="dev-ref-types search_ref_type"
                                                onChange={handleCheckboxChange}
                                                checked={selectedCheckboxes.includes("3")}
                                            />
                                            PCA Complete ASTM
                                        </li>
                                            <li>
                                                <input
                                                    name="search_ref_type[]"
                                                    value="3"
                                                    type="checkbox"
                                                    className="dev-ref-types search_ref_type"
                                                    onChange={handleCheckboxChange}
                                                    checked={selectedCheckboxes.includes("3")}
                                                />
                                                PCA Complete ASTM
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Other collapsible sections can be created similarly, following the structure shown above */}
                    {/* Add more sections here as needed */}

                </ul>
            </li>
        </div>
    );
};

export default Dropdown;
