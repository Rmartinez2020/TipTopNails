/* === Dependencies === */
import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <NavLink className="navbar-brand" to="#top">Tip Top Nails</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link bad-text" to="#announcements" scroll={el => {
                                const offset = 52;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }} data-toggle="collapse" data-target=".navbar-collapse.show">Announcements</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link bad-text" to="#pricing" scroll={el => {
                                const offset = 52;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }} data-toggle="collapse" data-target=".navbar-collapse.show">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link bad-text" to="#gallery" scroll={el => {
                                const offset = 52;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }} data-toggle="collapse" data-target=".navbar-collapse.show">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link bad-text" to="#contact" scroll={el => {
                                const offset = 52;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }} data-toggle="collapse" data-target=".navbar-collapse.show">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;