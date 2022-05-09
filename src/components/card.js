import React from 'react';
import katieZaferes from '../images/katie-zaferes.png';
import star from '../images/star.png';


//wrap element in curly braces for conditonals, create condiontal before
//see card-badge

export default function Card (props) {
    console.log(props.openSpots);

    let badgeText
    if(props.openSpots === 0) {
        badgeText= "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {<div className="card-badge">{badgeText}</div>} 
            <img src={katieZaferes} className="card--image"/>
            <div className='card-stats'>
                <img src={star} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})•</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className='bold'>from ${props.price}/ person</span></p>
        </div>
    )
}