/* === Dependencies === */
import React from "react";

function Contact() {
    return (
        <>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h3>Have Question or Need an Appointment?</h3>
                    <a href="tel:772-794-2302">
                        <button className="btn btn-success large">
                            Call Us: 772-794-2302</button></a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
                    <h3>Address</h3><br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4950570480105!2d-80.39103948486337!3d27.640151182819736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de5ee0635bb1cb%3A0x7cad6160298a2dd1!2s770%2021st%20St%2C%20Vero%20Beach%2C%20FL%2032960!5e0!3m2!1sen!2sus!4v1590428363025!5m2!1sen!2sus" width="300" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="directions"></iframe>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center bad-text">
                    <h3>Business Hours</h3><br />

                    <div className="float-left text-right hours bad-text">
                    Monday:<span> 9:30am - 6:30pm</span><br />
                    Tuesday:<span> 9:30am - 6:30pm</span><br />
                    Wednesday:<span> 9:30am - 6:30pm</span><br />
                    Thursday:<span> 9:30am - 6:30pm</span><br />
                    Friday:<span> 9:30am - 6:30pm</span><br />
                    Saturday:<span> 9:30am - 6:30pm</span><br />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;