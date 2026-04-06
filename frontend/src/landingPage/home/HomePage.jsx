import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Trust from './Trust';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Awards/>
            <Trust/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
            
        </>

     );
}

export default HomePage;