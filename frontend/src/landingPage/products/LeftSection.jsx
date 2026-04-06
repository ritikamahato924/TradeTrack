import React from 'react';

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row mt-5">
                <div className="col-4 me-5 ">
                    <img src={imageUrl}></img>
                </div>
                <div className="col-2"></div>
                <div className="col-4 ps-5 pt-5 ms-5 mb-5">
                    <h3 className="mb-3">{productName}</h3>
                    <p className="mb-3 text-muted" style={{lineHeight:"1.8rem", width:"110%"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo &nbsp; &#8594;</a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More &nbsp; &#8594;</a>
                    </div>

                    <div className="mt-4 d-flex">
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"></img></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media\images\appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;