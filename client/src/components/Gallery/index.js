import React from "react";

function Gallery (props) {
    return(
        <>
        <img src={process.env.PUBLIC_URL+ props.src} alt={props.alt} className="img-fluid float-left m-2 gal"></img>
        </>
    )
}

export default Gallery;