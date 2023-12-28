import React from "react";
import Logo from "../images/logo.svg";

const  Bottom = () => {
    return (<>
        <section className="bottom p-5 text-center">
            <div className="left">
                <picture className="logo">
                    <img src={Logo} alt="logo"/>
                </picture>
                <ul className="menu-bottom py-4">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="right py-2">
                <ul className="icons my-1">
                    <li><i className="fa-brands fa-square-facebook " ></i></li>
                    <li><i className="fa-brands fa-twitter " ></i></li>
                    <li><i className="fa-brands fa-pinterest  " ></i></li>
                    <li><i className="fa-brands fa-instagram " ></i></li>
                </ul>
                <h6>© 2021 Loopstudios. All rights reserved.</h6>
            </div>
        </section>
    </>)
}

export default Bottom;