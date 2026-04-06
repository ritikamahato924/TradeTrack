import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" id="home-image"></img>
                <h2 className="mt-5 fs-2 text-muted">Invest in everything</h2>
                <p className="fs-4 text-muted">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button type="button" class="btn btn-primary mb-5" style={{width: "18%", margin:"0 auto", fontSize:"20px"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Hero;