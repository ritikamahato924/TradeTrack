import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg pb-3 border-bottom sticky-top" style={{backgroundColor: "#ffffff"}}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="media\images\logo.svg" alt="logo" style={{width:"20%", marginLeft:"100px"}}></img>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
                        <li className="nav-item">
                            <Link className="nav-link ps-4" aria-current="page" to="/signup" style={{color:"black"}}>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-4" to="about" style={{color:"black"}}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-4" to="products" style={{color:"black"}}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-4" to="pricing" style={{color:"black"}}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-4" to="support" style={{color:"black"}}>Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-4" href="#" style={{color:"black"}}><i class="fa-solid fa-bars"></i></Link>
                        </li>
                        
                    </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;