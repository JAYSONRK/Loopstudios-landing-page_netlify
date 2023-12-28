import React from "react";
import Logo from "../images/logo.svg";
import MIcon from "../images/icon-hamburger.svg";

const  Top = (prop) => {
    return (<>
        <section className="top px-4 py-5 mb-5">
            <div className="header d-flex justify-content-between align-items-center">
                <picture className="logo">
                    <img src={Logo} alt="logo"/>
                </picture>
                <picture className="menu-icon" onClick={prop.toggleMenu}>
                    <img src={MIcon} alt="icon"/>
                </picture>
                <ul className="menu-top">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="heading p-4">
                <h1>Immersive experiences that deliver</h1>
            </div>
        </section>
    </>)
}

export default Top;