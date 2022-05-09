import React from "react";
import airbnbLogo from "../images/airbnb.png";

export default function Navbar() {
    return(
        <nav className="nav">
            <img src={airbnbLogo} className="nav--logo" />
            
        </nav>
    )
}