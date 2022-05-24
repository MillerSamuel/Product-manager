import React, {useState} from "react";
import axios from "axios";

const Form=(props)=>{
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");
    const [errors,setErrors]=useState({});

    const addProduct=(e)=>{
        e.preventDefault();
        let formInfo={title,price,description}
        axios.post("http://localhost:8000/api/addproduct",formInfo)
            .then(res=>{
                console.log("response:", res)

                if(res.data.error){
                    setErrors(res.data.error.errors)
                }
                else{
                    setTitle("")
                    setPrice("")
                    setDescription("")
                    props.setFormToggle(!props.formToggle);
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <>
            <form onSubmit={addProduct}>
                <h1>New Product</h1>
                <hr />
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" onChange={(e)=>setTitle(e.target.value)} type="text" name="title" value={title}/>
                    <p className="text-danger"> {errors.title? errors.title.message:null}</p>
                </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">Price:</label>
                        <input className="form-control" onChange={(e)=>setPrice(e.target.value)} type="number" name="price" value={price==""?"":price} />
                        <p className="text-danger"> {errors.price? errors.price.message:null}</p>
                    </div>
                <div className="form-group m-2">
                    <label htmlFor="description">Description:</label>
                    <input className="form-control" onChange={(e)=>setDescription(e.target.value)} type="text" name="description" value={description} />
                    <p className="text-danger"> {errors.description? errors.description.message:null}</p>
                </div>
                <input type="submit" value="Create" />
            </form>
        </>
    )
}



export default Form