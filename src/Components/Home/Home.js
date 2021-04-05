import React, {  useEffect, useState } from 'react';
import Product from '../Products/Product';





const Home = () => {
    const[products, setProducts] =useState([])
    useEffect(()=>{
        fetch('https://serene-badlands-73995.herokuapp.com/products')
        .then(res => res.json())
        .then(result=>{
            setProducts(result);
        })
    })
    
    return (
        <div className="row">
            {
               
                

                products.map(product=><Product key={product._id} product={product}></Product>)
            }

           
             
            
        </div>
    );
};

export default Home;