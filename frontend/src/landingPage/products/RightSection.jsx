import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-4 pt-5 me-5 mt-5">
                    <h3 className="mb-3 mt-5">{productName}</h3>
                    <p className="mb-3 text-muted" style={{lineHeight:"1.8rem", width:"110%"}}>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{marginRight:"50px", textDecoration:"none"}}>Learn More &nbsp; &#8594;</a>
                    </div>

                </div>
                <div className="col-4 ps-5">
                    <img src={imageUrl}></img>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
     );
}

export default RightSection;