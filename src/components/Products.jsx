import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
const Products = (props) => {

    const [allProducts, setAllProducts] = useState([])
    const history=useHistory();
    const [deleteToggle,setDeleteToggle]=useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/allproducts")
            .then(res => {
                console.log("response:", res)
                setAllProducts(res.data.results)
            })
            .catch(err => {
                console.log("error=>", err)
            })
    }, [deleteToggle,props.formToggle])

    const deleteProduct=(_id)=>{
        axios.delete(`http://localhost:8000/api/deleteproduct/${_id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>{
                console.log(err)
            })
        }


    return (
        <div>
            <h1>All products here</h1>
            {allProducts.map((prod, i) => {
                return (
                    <div className="d-flex justify-content-center m-2">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/${prod._id}`}>{prod.title}</Link></h5>
                                <h6 className="card-subtitle mb-2 text-muted">${prod.price}</h6>
                                <p className="card-text">{prod.description}</p>
                                <Link to={`/${prod._id}/edit`}>Edit</Link> 
                                <button onClick={()=>{deleteProduct(prod._id)}} className="m-2">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Products