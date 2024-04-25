import React from 'react';
import "./TableGrid.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'; // Import required icons

const TablePager = () => {
  return (
    <div className="tablesorter-pager" style={{
      font: "bold 14px/20px Arial, Sans-serif",
      padding: "8px",
      border: "1px solid #ddd",
      backgroundColor: "transparent", 
      fontWeight: 800,
      fontSize: "12px",
      backgroundImage: "linear-gradient(to bottom, #f9f9f9 0%, #eeeeee 100%)",
      backgroundRepeat: "repeat-x"
    }}>
      
      <button type="button" className="btn first disabled" tabIndex="0" aria-disabled="true">
        <FontAwesomeIcon icon={faStepBackward} style={{ fontSize: "11px" }} />
      </button>

      
      <button type="button" className="btn prev disabled" tabIndex="0" aria-disabled="true">
        <FontAwesomeIcon icon={faBackward} style={{ fontSize: "11px" }} />
      </button>

      
      <span className="pagedisplay">0 - 0 / 0 (0)</span>

      
      <button type="button" className="btn next disabled" tabIndex="0" aria-disabled="true">
        <FontAwesomeIcon icon={faForward} style={{ fontSize: "11px" }} />
      </button>

      
      <button type="button" className="btn last disabled" tabIndex="0" aria-disabled="true">
        <FontAwesomeIcon icon={faStepForward} style={{ fontSize: "11px" }} />
      </button>

     
      <select className="pagesize input-mini" title="Select page size" style={{ padding: "4px 6px" }}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100000">All</option>
      </select>

      
      <select className="pagenum input-mini" title="Select page number" style={{ padding: "4px 6px" }}>
      </select>
    </div>
  );
};

export default TablePager;





