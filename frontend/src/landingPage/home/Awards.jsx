import React from 'react';

function Awards() {
    return ( 
        <div className="conatiner p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg"></img>
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1 className="fs-2">Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over15% of all retail order volumes in 
                        India daily by trading and investing in:</p>
                        <div className="row mt-5">
                            <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                            </div>
                        </div>
                        <img src="media\images\pressLogos.png" style={{width:"90%"}} className="mt-3 ps-3"></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;