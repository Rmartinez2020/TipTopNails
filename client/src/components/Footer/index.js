/* === Dependencies === */
import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer fixed-bottom bg-light text-center">
                <a href="tel:772-794-2302">
                    <button className="btn btn-success btn-lg footer-button float-left bad-text">
                    <i className="fas fa-phone"></i>&nbsp;Call Us Now!</button>
                </a>
                <a href="https://goo.gl/maps/UdorKSBVar6v7iPeA" target="_blank">
                    <button className="btn btn-success btn-lg footer-button float-right bad-text">
                    <i className="far fa-directions"></i>&nbsp;Get Directions</button>
                </a>
            </footer>
        </>
    )
}


export default Footer;