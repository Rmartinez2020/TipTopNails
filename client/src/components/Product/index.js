/* === Dependencies === */
import React from "react";

function Product(props) {
    return (
        <>
            <div className="card m-auto product" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title float-left bad-text">{props.name}</h5>
                    <p className="card-text float-right bad-text">$<span className="bigger-text bad-text">{props.price}</span></p>
                </div>
            </div>
        </>
    );
};

export default Product;