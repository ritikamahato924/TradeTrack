import React from 'react';

function Trust() {
    return ( 
        <div className="conatiner p-5">
            <div className="row p-5">
                <div className="col-6 p-5">

                    <h2 className="fs-2">Trust with confidence</h2>
                    <h4 className="mt-5 fs-5">Customer-first always</h4>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh cores worth
                        of equity investments.</p>

                    <h4 className="fs-5">No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks, spam, "gamefication", or annoying push notifications. High quality apps
                        that you use your pace, the way you like.</p>

                    <h4 className="fs-5">The Zerodha universe</h4>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech statups offer you tailored
                        services specific to your needs.</p>

                    <h4 className="fs-5">Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just faciliate, but actively help you do
                        better with your money.</p>
                        
                </div>
                <div className="col-6 pt-5 ps-5">
                    <img src="media\images\ecosystem.png" style={{width:"75%"}}></img>
                    <div className="ms-4">
                        <a href="" className="mx-5" style={{textDecoration: "none"}}>Explore our products&nbsp;&#8594;</a>
                        <a href="" style={{textDecoration: "none"}}>Try kite demo&nbsp;&#8594;</a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Trust;