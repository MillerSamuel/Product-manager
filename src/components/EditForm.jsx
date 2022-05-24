import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router"
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"


const EditForm=()=>{

    const {_id}=useParams();
    const [productInfo,setProductInfo]=useState({});
    const [errors,setErrors]=useState({});
    const history=useHistory();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then((res)=>{
                console.log('response:',res)
                setProductInfo(res.data.results)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const editProduct=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateproduct/${_id}`,productInfo)
            .then(res=>{
                console.log("response:", res)
                if(res.data.error){
                    setErrors(res.data.error.errors)
                }
                else{
                    setErrors({})
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const deleteProduct=()=>{
        axios.delete(`http://localhost:8000/api/deleteproduct/${_id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
        }


    const changeHandler=(e)=>{
        
        setProductInfo({...productInfo,[e.target.name]:e.target.value})
    }



    return(
        <div>
            <h1>Edit {productInfo.title}</h1>
            <form onSubmit={editProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control"  onChange={changeHandler} type="text" name="title" value={productInfo.title}/>
                    <p className="text-danger"> {errors.title? errors.title.message:null}</p>
                </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">Price:</label>
                        <input className="form-control"   onChange={changeHandler} type="number" name="price" value={productInfo.price} />
                        <p className="text-danger"> {errors.price? errors.price.message:null}</p>
                    </div>
                <div className="form-group m-2">
                    <label htmlFor="description">Description:</label>
                    <input className="form-control"   onChange={changeHandler} type="text" name="description" value={productInfo.description} />
                    <p className="text-danger"> {errors.description? errors.description.message:null}</p>
                </div>
                <input type="submit" value="Edit" />
            </form>
            <button onClick={deleteProduct} className="m-2">Delete</button>
            <Link to="/">Home</Link>
        </div>
    )
}

export default EditForm