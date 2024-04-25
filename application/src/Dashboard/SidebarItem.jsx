import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,  faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const SidebarItem = ({ title, icon, children, to }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(children);

  const handleClick = (e) => {
    // For items with children, toggle the submenu instead of navigating
    if (hasChildren) {
      e.preventDefault(); // Stop the navigation
      setIsOpen(!isOpen); // Toggle submenu visibility
    }
  };

  return (
    <li className="sidebar-item">
    {hasChildren ? (
      <div onClick={handleClick} className="sidebar-link karthy">
        <FontAwesomeIcon icon={icon} className="me-2" />
        &nbsp;
        &nbsp;
        <span className="title">{title}</span>
        {hasChildren && (
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="sidebar-chevron"
            style={{ paddingLeft: 20 }}
          />
        )}
      </div>
    ) : (
      <NavLink to={to} className="sidebar-link">
        <FontAwesomeIcon icon={icon} className="me-2" /> 
           &nbsp;
        &nbsp; <span className="title">{title}</span>
      </NavLink>
    )}
      {hasChildren && (
        <Collapse in={isOpen}>
          <div className="sidebar-content-container">
            <div className="sidebar-submenu">
              {children}
            </div>
          </div>
        </Collapse>
      )}
    </li>
  );
};

export default SidebarItem;
