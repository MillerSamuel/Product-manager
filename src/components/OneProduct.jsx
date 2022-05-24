import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router"
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"


const OneProduct=()=>{

    const {_id}=useParams();
    const [product,setProduct]=useState({})
    const history=useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res=>{
                console.log(res)
                setProduct(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    const deleteProduct=()=>{
        axios.delete(`http://localhost:8000/api/deleteproduct/${_id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
        }

    return(
        <div>
            <h2>Title: {product.title}</h2>
            <h2>Price:  ${product.price}</h2>
            <h2>Description: {product.description}</h2>
            <button className="m-2">
                <Link to={`/${_id}/edit`}>Edit</Link>
            </button>
            <button onClick={deleteProduct} className="m-2">Delete </button>
            <button className="m-2">
                <Link to="/">Home</Link>
            </button>
        </div>
    )
}


export default OneProduct