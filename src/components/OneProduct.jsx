import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router"

const OneProduct=()=>{

    const {_id}=useParams();
    const [product,setProduct]=useState({})

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

    return(
        <div>
            <h2>{product.title}</h2>
            <h2>${product.price}</h2>
            <h2>{product.description}</h2>
        </div>
    )
}


export default OneProduct