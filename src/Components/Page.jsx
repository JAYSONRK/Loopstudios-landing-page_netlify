import React, { useState } from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import MobileMenu from "./MobileMenu";

const  Page = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (<>
        <main className="page container-fluid">
            {toggle && <MobileMenu
                toggleMenu={toggleMenu}
            />}
            <Top
                toggleMenu={toggleMenu}
            />
            <Middle/>
            <Bottom/>
        </main>
    </>)
}

export default Page;