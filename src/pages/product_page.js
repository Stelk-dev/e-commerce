import React from 'react'
import { useLocation } from 'react-router-dom';

export function ProductPage(){
    const { product } = useLocation().state;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.mainImage} width="200px" height="200px" alt={"phone - " + product.title}/>
        </div>
    );
}