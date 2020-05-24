/* === Dependencies === */
import React, {useState, useEffect} from "react";
import Announcements from "../components/Announcements";
import Product from "../components/Product";
import Contact from "../components/Contact";

function Homepage() {
    /* Set up the State */
    const [prodcuts, setProducts] = useState([]);

    useEffect(()=> {
        fetch('api/products/all')
  .then(response => response.json())
  .then(data => setProducts(data));
    }, [])

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
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2>Manicure/Pedicure</h2>
                            {prodcuts.filter(product =>{
                                return product.category === "Manicure Pedicure"
                            }).map(product => {
                            return <Product name={product.name} price={product.price}/>
                        })}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>Nail Care</h2>
                            {prodcuts.filter(product =>{
                                return product.category === "Nail Care"
                            }).map(product => {
                            return <Product name={product.name} price={product.price}/>
                        })}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>Healthy Nails</h2>
                            {prodcuts.filter(product =>{
                                return product.category === "Healthy Nails"
                            }).map(product => {
                            return <Product name={product.name} price={product.price}/>
                        })}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>Waxing</h2>
                            {prodcuts.filter(product =>{
                                return product.category === "Waxing"
                            }).map(product => {
                            return <Product name={product.name} price={product.price}/>
                        })}
                        </div>
                    </div>
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