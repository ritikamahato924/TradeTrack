import React from 'react';
 
function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 pe-5">
                    <img src="media\images\education.svg" style={{width:"70%"}}></img>
                </div>
                <div className="col-6">
                    <h1 className="mt-5 mb-4 fs-3">Free and open market education</h1>
                    <p>Versity, the largest onlinestock market education bookin the world covering everything from the basics
                        to advanced trading.</p>
                    <a href="" style={{textDecoration: "none"}}>Versity&nbsp;&#8594;</a>

                    <p className="mt-5">TradingQ&A, the most active tradingand investment community in India for all your
                        market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A&nbsp;&#8594;</a>

                </div>
            </div>
        </div>
     );
}

export default Education;