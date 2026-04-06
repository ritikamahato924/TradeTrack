import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="support-hero">
            <div className="p-5 pb-5" id="support-title">
                <h5>Support Portal</h5>
                <a href="" id="support-track">Track Tickets</a>
            </div>
            <div className="row ps-5 pe-5 ms-5">
                <div className="col-6 ps-5 pe-5">
                    <h4 id="support-heading" className="mb-3 fs-4">Search for an answer or browse help topics to create a ticket</h4>
                    <form className="mb-3">
                        <input 
                            id="support-input"
                            placeholder="Eg: How do I open my account, How do I activate F&O.." 
                            type="text">
                            
                        </input>
                    </form>
                    <div className="mb-5">
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        Track account opening
                    </a>
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        Track segment activation
                    </a>
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        Intraday margins
                    </a><br></br>
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        Kite user manual
                    </a>
                    </div>
                </div>
                <div className="col-6 ps-5 pe-5">
                    <h4 id="support-featured" className="fs-4">Featured</h4>
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        1. Current Takeovers and Delisting - January 2024
                    </a><br></br>
                    <a href="" style={{textDecoration:"none", color:"white"}} id="support-link">
                        2. Latest Intraday laverages - MIS & CO
                    </a><br></br>
                </div>
            </div>
        </section>
     );
}

export default Hero;