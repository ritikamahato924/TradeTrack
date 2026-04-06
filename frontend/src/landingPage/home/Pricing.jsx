import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <h1 className="mb-4 fs-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing&nbsp;&#8594;</a>
                </div>
                <div className="col-1"></div>
                <div className="col-4 me-5">
                    <div className="row text-center" style={{width:"150%"}}>
                        <div className="col border p-3">
                            <h2 className="mb-3">&#8377;0</h2>
                            <p>Free equity delever and direct mutual funds</p>
                        </div>
                        <div className="col border p-3 me-5 ">
                            <h2 className="mb-3">&#8377;20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;