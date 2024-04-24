import React from 'react';
import IconButton from './IconButton';
import { faCheckCircle, faEnvelope, faBarChart, faLineChart, faList } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import './Part.css';

const buttonData = [
  { href: "https://stagingapp.blue222.com/fadmin/dashboard/fadraft", icon: faEnvelope, text: 'Draft RFPs', className: 'btn-custom', badgeCount: 0 },
  { href: "https://stagingapp.blue222.com/faadmin/dashboard/fapending", icon: faCheckCircle, text: 'Pending RFPs', className: 'btn-success', badgeCount: 0 },
  { href: "https://stagingapp.blue222.com/fadmin/dashboard/fain_progress", icon: faBarChart, text: 'Active Projects', className: 'btn-info', badgeCount: 0 },
  { href: "https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview", icon: faLineChart, text: 'Pending Review', className: 'btn-spl', badgeCount: 0 },
  { href: "https://stagingapp.blue222.com/faadmin/dashboard/facomplete", icon: farStar, text: 'Projects Completed', className: 'btn-warning', badgeCount: 0 },
  { href: "https://stagingapp.blue222.com/faadmin/dashboard/faall", icon: faList, text: 'All', className: 'btn-danger', badgeCount: 0 },
];

const Test = () => {
  return (
    <div id="content-container" className="card-container" >
          <div className="row ten-columns" >
          {buttonData.map(button => (
            <div className="col-sm-6 col-md-6 col-lg-2" key={button.text}>
              <IconButton {...button} />
            </div>
          ))}
        </div>
      </div>
    
  );
};
export default Test;