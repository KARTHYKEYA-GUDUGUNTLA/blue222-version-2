import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Sidebar from '../Dashboard/Sidebar';
import logo from '../images/logo_new.png';

const CardOnFile = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='single'>
        <Navigation />
        <div className="layout">
            <div id="site-logo" style={{ paddingTop: '10px', paddingBottom: '30px', paddingLeft: '20px' }}>
                <a href="#"><img src={logo} alt="Logo" style={{ width: '158px', height: '60px' }} /></a>
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
        <div className="content" style={{paddingLeft:'210px'}}>
            <div className="col-md-12">
                <div >
                    <h3 align="left" style={{padding:'0px'}}>Card on File</h3>
                </div>
                <div className="col-md-8">
                    <div >
                        <div >
                            <div className="row">
                                <div className="col-md-8">
                                    <p>We do not store any credit card information. All credit card information is stored by <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>, a secure, online payment processing company.</p>
                                    <p>When projects are approved, Blue222 will invoice the Client or Vendor (as chosen by the Client) by email for our fee. The invoice may be paid from the email.</p>
                                    <p>Blue222’s Fees are 4% of the bid amount (up to $350) plus 0.2% for amounts over $350.</p>
                                    <p>If you wish for Blue222 to automatically charge your credit card, instead of manually entering your credit card for each emailed invoice, you may enter your credit card below.</p>
                                    <p>Add Card Info</p>
                                    <div className="col-xs-12">
                                        <form onSubmit={handleSubmit} id="payment-form">
                                            <input  />
                                            <button type="submit" className="btn btn-success">Add Card</button>
                                            <div className="outcome">
                                                <div className="error visible">Your card number is incomplete.</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <form onSubmit={handleSubmit} id="form_update_card">
                                        <p>
                                            <span>Blue222 fees charged to:&nbsp;&nbsp;</span>
                                            <input checked="checked" name="blue222_fees_charged_to" type="radio" value="Vendor" />&nbsp;<span>Vendor</span>&nbsp;
                                            <input name="blue222_fees_charged_to" type="radio" value="Client" />&nbsp;<span>Client (Your account)</span>&nbsp;
                                            <input className="btn btn-success" id="btn-update" type="submit" value="Update" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CardOnFile;
