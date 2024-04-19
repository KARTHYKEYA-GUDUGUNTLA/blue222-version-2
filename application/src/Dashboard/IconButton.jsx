import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Part.css';

const IconButton = ({ href, icon, text, badgeCount, className }) => {
  return (
    <a href={href}>
      <button className={`btn btn-block ${className}`} >
        <FontAwesomeIcon icon={icon} />{text} &nbsp;
        <span className="badge badge-pill badge-light">{badgeCount}</span>
      </button>
    </a>
  );
};

export default IconButton;