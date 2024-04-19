import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Instructions() {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
        <>
            <p style={{ color: 'black' }} className="text-center">
                We no longer support sign in with LinkedIn.
                <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={handleShow}>
                    Click here
                </span> for more info.
            </p>
 
            <Modal show={show} onHide={handleClose} tabIndex="-1">
                <Modal.Header closeButton style={{ backgroundColor: '#d9edf7' }}>
                    <Modal.Title style={{ color: 'black' }}>Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: 'black' }}>If you signed up using LinkedIn, you must now log in with a username and password.</p>
                    <p style={{ color: 'black' }}>To retrieve your username, <Link to="/forgot-username">click here</Link> and enter the email you use on your LinkedIn account.</p>
                    <p style={{ color: 'black' }}>After retrieving your username, <Link to="/forgot-password">click here</Link> to enter your username and email address to set your password.</p>
                </Modal.Body>
            </Modal>
        </>
    );
}
 
export default Instructions;