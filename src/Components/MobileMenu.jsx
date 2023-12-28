import React from "react";
import Logo from "../images/logo.svg";
import Close from "../images/icon-close.svg";

const MobileMenu = (prop) => {
    return (<>
    <div className="mobile-menu">
        <div className="header d-flex justify-content-between align-items-center">
            <picture className="logo">
                <img src={Logo} alt="logo"/>
            </picture>
            <picture className="menu-icon" onClick={prop.toggleMenu}>
                <img src={Close} alt="icon"/>
            </picture>
        </div>    
        <ul className="menu-mobile">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
    </div>
    </>)
}

export default MobileMenu;