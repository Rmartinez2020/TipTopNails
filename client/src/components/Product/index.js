/* === Dependencies === */
import React from "react";

function Product(props) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title float-left">{props.name}</h5>
                    <p className="card-text float-right">${props.price}</p>
                </div>
            </div>
        </>
    )
};

export default Product;