import React from 'react';

function Hero() {
    return ( 
        <div className="container mb-5 mt-5">
            <div className="row text-center" style={{fontFamily:"sans-serif"}}>

                <h2 className="mb-3 mt-5">Charges</h2>
                <h4 className="text-muted mb-5">List of all charges and taxes</h4>

                <div className="row mt-5">
                <div className="col-4 p-4">
                    <img src="media\images\pricingEquity.svg" style={{width:"80%"}}></img>
                    <h1 className="fs-3 pb-3">Free equity delivery</h1>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.
                    </p>  
                </div>
                
                <div className="col-4 p-4">
                    <img src="media\images\intradayTrades.svg" style={{width:"80%"}}></img>
                    <h1 className="fs-3 pb-3">Intraday and F&O trades</h1>
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on 
                        intraday trades across equity, currency, and commodity trades. 
                        Flat ₹20 on all option trades.
                    </p>  
                </div>
                <div className="col-4 p-4">
                    <img src="media\images\pricingEquity.svg" style={{width:"80%"}} ></img>
                    <h2 className="fs-3 pb-3">Free direct MF</h2>
                    <p className="text-muted mb-3">
                        All direct mutual fund investments are<br></br> absolutely free — ₹ 0 commissions & DP<br></br>charges.
                    </p>  
                </div>
               </div>
            </div>
        </div>
     );
}

export default Hero;