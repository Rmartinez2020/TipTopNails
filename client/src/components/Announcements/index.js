/* === Dependencies === */
import React from "react";

/* For now this will be a basic component 
 Plan for future is to have multiple announcements
*/
function Announcements() {
    return (
        <>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">New Covid-19 Rules</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Posted on May 24, 2020</h6>
                    <p class="card-text">To protect our customers and employees, we require all customers to wear a face mask. If you do not have a face mask we will provide you with one. We hope you understand!</p>
                </div>
            </div>
        </>
    )
};

export default Announcements;