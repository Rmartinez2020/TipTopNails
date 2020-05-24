/* === Dependencies === */
import React from "react";
import Announcements from "../components/Announcements";
import Product from "../components/Product";
import Contact from "../components/Contact";

function Homepage() {
    return (
        <div className="container-fluid">
            <div className="row" id="top">
                <h1>Place an image or title or something</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 >Announcements</h1>
                    <Announcements />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 id="about">Pricing</h1>
                        
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 id="gallery">Gallery</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 id="contact">Contact</h1>
                    <Contact />
                </div>
            </div>
        </div>
    )
};

export default Homepage;