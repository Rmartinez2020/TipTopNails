/* === Dependencies === */
import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#top">Tip Top Nails</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#announcements">Announcements</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#pricing">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;