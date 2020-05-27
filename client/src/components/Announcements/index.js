/* === Dependencies === */
import React from "react";

/* For now this will be a basic component 
 Plan for future is to have multiple announcements
*/
function Announcements() {
    return (
        <>
            <div className="horizontalAnnouncements">
                <div className="card float-left m-2 announcement-card">
                    <div className="card-body">
                        <h5 className="card-title bad-text">New Covid-<span className="bigger-text bad-text">19</span> Rules</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Posted on May 24, 2020</h6>
                        <p className="card-text bad-text announcement">To protect our customers and employees, we require all customers to wear a face mask. If you do not have a face mask we will provide you with one. We hope you understand!</p>
                    </div>
                </div>
                <div className="card float-left m-2 announcement-card">
                    <div className="card-body">
                        <h5 className="card-title bad-text">Check out our new Instagram</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Posted on May 26, 2020</h6>
                        <p className="card-text bad-text announcement">Follow our new Instagram page and share with your friends! Thank you for all your continued support! <br /><a href="https://www.instagram.com/tiptopnailsvb/?hl=en" target="_blank" className="ig-link"><i className="fab fa-instagram fa-2x"></i></a></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Announcements;