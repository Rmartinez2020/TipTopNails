/* === Dependencies === */
import React, { useState, useEffect } from "react";
import Announcements from "../components/Announcements";
import Product from "../components/Product";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Images from "../images.json";

function Homepage() {
    /* Set up the State */
    const [prodcuts, setProducts] = useState([]);

    useEffect(() => {
        fetch('api/products/all')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="container">
            <div className="row" id="top">
                <div className="col-sm-12 text-center">
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} className="img-fluid" alt="logo" />
                </div>
            </div>
            <div className="row" id="announcements">
                <div className="col-sm-12 text-center">
                    <h1 className="font-weight-bold">Announcements</h1>
                    <hr />
                    <Announcements />
                </div>
            </div>
            <div className="row" id="pricing">
                <div className="col-sm-12 text-center">
                    <h1 className="font-weight-bold">Pricing</h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-center">
                            <div className="category">
                                <h3 >Manicure/Pedicure</h3>
                            </div>

                            {prodcuts.filter(product => {
                                return product.category === "Manicure Pedicure"
                            }).map((product, i) => {
                                return <Product name={product.name} price={product.price} key={i} />
                            })}
                        </div>
                        <div className="col-sm-12 col-md-6 text-center">
                            <div className="category">
                                <h3>Nail Care</h3>
                            </div>
                            {prodcuts.filter(product => {
                                return product.category === "Nail Care"
                            }).map((product, i) => {
                                return <Product name={product.name} price={product.price} key={i} />
                            })}
                        </div>
                        <div className="col-sm-12 col-md-6 text-center">
                            <div className="category">
                                <h3>Healthy Nails</h3>
                            </div>
                            {prodcuts.filter(product => {
                                return product.category === "Healthy Nails"
                            }).map((product, i) => {
                                return <Product name={product.name} price={product.price} key={i} />
                            })}
                        </div>
                        <div className="col-sm-12 col-md-6 text-center">
                            <div className="category">
                                <h3>Waxing</h3>
                            </div>
                            {prodcuts.filter(product => {
                                return product.category === "Waxing"
                            }).map((product, i) => {
                                return <Product name={product.name} price={product.price} key={i} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="gallery">
                <div className="col-sm-12 text-center">
                    <h1 className="font-weight-bold">Gallery</h1>
                    <hr />
                    <div className="horizontalScroll">
                        {Images.map((image, i) => {
                            return <Gallery src={image.src} alt={image.alt} key={i} />
                        })}
                    </div>

                </div>
            </div>
            <div className="row" id="contact">
                <div className="col-sm-12 text-center">
                    <h1 className="font-weight-bold">Contact</h1>
                    <hr />
                    <Contact />
                </div>
            </div>
        </div>
    )
};

export default Homepage;