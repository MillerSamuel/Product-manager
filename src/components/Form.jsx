import React, {useState} from "react";
import axios from "axios";

const Form=()=>{

    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");

    const addProduct=(e)=>{
        e.preventDefault();
        let formInfo={title,price,description}
        axios.post("http://localhost:8000/api/addproduct",formInfo)
            .then(res=>{
                console.log("response:", res)
            })
            .catch(err=>{
                console.log(err)
            })

    }

    return(
        <>
            <h1>Form Here</h1>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" onChange={(e)=>setTitle(e.target.value)} type="text" name="title" />
                </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">Price:</label>
                        <input className="form-control" onChange={(e)=>setPrice(e.target.value)} type="number" name="price" />
                    </div>
                <div className="form-group m-2">
                    <label htmlFor="description">Description:</label>
                    <input className="form-control" onChange={(e)=>setDescription(e.target.value)} type="text" name="description" />
                </div>
                <input type="submit" value="Create" />
            </form>
        </>
    )
}



export default Form