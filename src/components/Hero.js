import React from 'react';
import photoGrid from "../images/photo.png" ;


// <img src="../images/photo.png" className='hero--photo'>
function Hero () {
    return(
        <section className='hero'>
            <img src={photoGrid} className='hero--photo'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
}



export default Hero;