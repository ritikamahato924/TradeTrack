import React from 'react';

function Team() {
    return ( 
       <div className="container">
            <div className="row p-3">
                <h1 className="text-center">
                    People
                </h1> 
            </div>
            <div className="row pb-5">
                <div className="col-md-4 text-center pt-5 ps-5">
                   <img src="media\images\nithinKamath.jpg" alt="founder-image" 
                    style={{borderRadius:"50%", height:"230px", width:"230px"}}>
                   </img>
                   <h5 className="mt-3 text-muted">Nithin Kamath</h5>
                   <h6 className="text-muted small">Founder, CEO</h6>
                </div>

                <div className="col-8">
                    <p className="mt-5 me-5 text-muted">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during 
                        his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className="mt-3 me-5 text-muted">
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="mt-3 me-5 text-muted">
                        Beyond brokerage services, Zerodha has launched educational initiatives like Varsity and social impact ventures like 
                        the Rainmatter incubator for startups. 
                    </p>
                    <p className="mt-3 me-5 text-muted">
                        Playing basketball is his zen. 
                    </p>
                    <p className="mt-3 me-5 text-muted">
                        Connect on &nbsp;
                        <a href="" style={{textDecoration:"none"}}>Homepage / </a>
                        <a href="" style={{textDecoration:"none"}}>TradingQnA / </a>
                        <a href="" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>

            <div className="row pb-5">
                
                <div className="col-8">
                    <p className="mt-5 text-muted">
                        Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. 
                        An avid reader, he always appreciates a good game of chess.
                    </p>
                    <p className="mt-3 text-muted">
                        Kamath's path to success was unconventional; he dropped out of school after class 10 to pursue self-learning in financial markets, starting 
                        his career at a call center before trading stocks and eventually establishing the highly successful Zerodha.
                    </p>
                    <p className="mt-3 text-muted">
                        At 17, he worked at a call center, using his meager earnings and spare time to learn and experiment with trading.
                    </p>
                    <p className="mt-3 text-muted">
                        After years of trading, Kamath identified a gap in the market between what traders wanted and what brokers offered, 
                        noting the expensive, traditional offline models used by brokers
                    </p>
                    <p className="mt-3 text-muted">
                        Connect on &nbsp;
                        <a href="" style={{textDecoration:"none"}}>Homepage / </a>
                        <a href="" style={{textDecoration:"none"}}>TradingQnA / </a>
                        <a href="" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
                <div className="col-md-4 text-center pt-5">
                   <img src="media\images\nikhilKamath04.jpg" alt="founder-image" 
                    style={{borderRadius:"50%", height:"230px", width:"230px"}}>
                   </img>
                   <h5 className="mt-3 text-muted">Nikhil Kamath</h5>
                   <h6 className="text-muted small">Co-founder & CFO</h6>
                </div>


            </div>
        </div>
     );
}

export default Team;