import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavCSS from "./Nav.module.css";
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';




export default function Nav() {


    const [open, setOpen] = useState(false)

    return (
        <nav className={NavCSS.nav}>
            <div className={NavCSS.navMenu}>
                <Link className={NavCSS.link} to="/">Movie'sNow</Link>


                <button onClick={() => setOpen(!open)} className={NavCSS.btnIcon}  type="button" >
                    <img  src='./icons8-menu-30.png' alt="menu-icon"></img>
                </button>


                <NavDesktop />
                {open && <NavMobile />}


            </div>
        </nav>

    );
}

