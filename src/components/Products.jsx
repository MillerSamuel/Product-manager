import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"

const Products = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/allproducts")
            .then(res => {
                console.log("response:", res)
                setAllProducts(res.data.results)
            })
            .catch(err => {
                console.log("error=>", err)
            })
    }, [])


    return (
        <div>
            <h1>All products here</h1>
            {allProducts.map((prod, i) => {
                return (
                    <div className="d-flex justify-content-center">
                        <div className="card m-2" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{prod.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">${prod.price}</h6>
                                <p className="card-text">{prod.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Products