import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddProduct.css";


const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name:data.name,
      imageUrl: imageUrl,
      price: data.price,
    };

    console.log(productData);

    const url ='https://serene-badlands-73995.herokuapp.com/addProduct';

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(productData)
    })
    .then((res) => console.log("server side replace", res));
  };

  const handleImageUpload = (product) => {
    console.log(product.target.files[0]);
    const imageData =new FormData();
    imageData.set("key", "ff0f6dbf80b5660c4248ce3ae8b554b2");
    imageData.append("image", product.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(function (res) {
        setImageUrl(res.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="orderPlace">
      <h1 style={{ color: "Black",backgroundColor:'yellow' }}>Add New Product </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ color: 'Black' }}>Product Name</h3>
        <input name="name" placeholder='Enter Your Product' ref={register} />
        <br />
        <h3 style={{ color: 'Black' }}>Add Price</h3> 
        <input name="price" ref={register} />
        <br /><br/>
        <input  name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br /> <br/>
        <input style={{backgroundColor:'tomato',fontSize:'20px',width:'100px'}} type="submit" /> 
      </form>
    </div>
  );
};

export default AddProduct;
