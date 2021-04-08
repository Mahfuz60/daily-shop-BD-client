import React, {  useEffect, useState } from 'react';
import Product from '../Products/Product';
import Spinner from 'react-bootstrap/Spinner'






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
                {products.length === 0 && 
                <Spinner animation="border" role="status" style={{marginLeft:'20px'}}>
                <span className="sr-only">Loading...</span>
                 </Spinner>
            }
            
            {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
            
            
            </div>
    );
};

export default Home;