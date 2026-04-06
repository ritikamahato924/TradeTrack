import React from 'react';

function Universe() {
    return ( 
        <div className="container mb-5">
            <div className="row mt-5 text-center">
                <h3 className="text-muted mb-4 mt-5">The Zerodha Universe</h3>
                <p className="mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4">
                    <img src="media\images\zerodhaFundhouse.png" style={{width:"60%"}} className="mb-3"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Our assessement venture<br></br>
                    This is creating simple and transparent index<br></br>
                    funds to help you savefor your goals.</p>
                </div>
                <div className="col-4">
                    <img src="media\images\sensibullLogo.svg" style={{width:"70%"}} className="mb-4 mt-2"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Options trading platform that lets you<br></br>
                    create strategies, analyze positions, and examine<br></br>
                    create strategies, analyze positions, and examine</p>
                    
                </div>
                <div className="col-4">
                    <img src="media\images\tijori.svg" style={{width:"50%"}} className="mb-2"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Investment research platform<br></br>
                    that offers detailed insights on stocks,<br></br>
                    sectors, supply chains, and more.</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media\images\streakLogo.png" style={{width:"50%"}} className="mb-3"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Systematic trading platform<br></br>
                    that allows you to create and backtest<br></br>
                    strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\smallcaseLogo.png" style={{width:"65%"}} className="mb-3"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Thematic investing platform<br></br>
                    that helps you invest in diversified<br></br>
                    baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" style={{width:"40%"}} className="mb-4"></img>
                    <p className="text-small text-muted" style={{fontSize:"13px"}}>Personalized advice on life<br></br>
                    and health insurance. No spam<br></br>
                    and no mis-selling.</p>
                </div>
                <button type="button" class="btn btn-primary mb-5 mt-5" style={{width: "18%", margin:"0 auto", fontSize:"20px"}}>Signup for free</button>
             </div>
        </div>
        
     );
}

export default Universe;