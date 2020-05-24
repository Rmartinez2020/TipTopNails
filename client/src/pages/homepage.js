/* === Dependencies === */
import React from "react";
import Announcements from "../components/Announcements";

function Homepage() {
    return (
        <div className="container-fluid">
            <div className="row" id="top">

            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 >Announcements</h1>
                    <Announcements />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 id="about">About Us</h1>
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
                </div>
            </div>
        </div>
    )
};

export default Homepage;