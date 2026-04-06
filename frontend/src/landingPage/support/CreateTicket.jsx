import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row ps-5 pe-5 pb-5 pt-3 mt-3 mb-5">
                <h3 className="fs-2 mb-5">To create a ticket, select a relevent topic</h3>
                <div className="col-4 mt-3 mb-5">
                    <h5>
                       <i class="fa-solid fa-circle-plus" style={{fontSize:"15PX"}}></i> Account Opening
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Resident individual</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Minor</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Non Resident Indian (NRI)</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Company, Partnership, HUF and LLP</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Glossary</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Charges at Zerodha</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Getting Started</li></a>
                    </ul>
                </div>
                <div className="col-4 mt-3 mb-5">
                    <h5>
                       <i class="fa-solid fa-circle-user" style={{fontSize:"15PX"}}></i> Your Zerodha Account
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Your Profile</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Account modification</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Nomination</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Transfer and conversion of securities</li></a>
                        
                    </ul>
                </div>
                <div className="col-4 mt-3 mb-5">
                    <h5>
                       <i class="fa-solid fa-money-bill-trend-up" style={{fontSize:"15PX"}}></i> Kite
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>IPO</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Trading FAQs</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Margin Trading Facility (MTF) and Margins</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Charts and orders</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Alerts and Nudges</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>General</li></a>
                    </ul>
                </div>
                 <div className="col-4 mt-2 mb-5">
                    <h5>
                       <i class="fa-solid fa-indian-rupee-sign" style={{fontSize:"15PX"}}></i> Funds
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Add money</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Withdraw money</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Add bank accounts</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>eMandates</li></a>
                    </ul>
                </div>
                <div className="col-4 mt-2 mb-5">
                    <h5>
                       <i class="fa-solid fa-circle-notch" style={{fontSize:"15PX"}}></i> Console
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Portfolio</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Corporate actions</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Funds statement</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Reports</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Profile</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Segments</li></a>
                    </ul>
                </div>
                <div className="col-4 mt-2 mb-5">
                    <h5>
                       <i class="fa-solid fa-coins" style={{fontSize:"15PX"}}></i> Coin
                    </h5>
                    <ul className="ps-5">
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Mutual funds</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>National Pension Scheme (NPS)</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Fixed Deposit (FD)</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Features on Coin</li></a>
                        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}><li>Payments and Orders</li></a>
                        
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;