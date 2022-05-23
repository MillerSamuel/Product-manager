import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
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
                                <h2 className="m-2"><Link to={`/${prod._id}`}>{prod.title}</Link></h2>
                    </div>
                )
            })}
        </div>
    )
}


export default Products