import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Data from "../Dummy.json";
import { NavLink } from "react-router-dom"

function Card({product}) {
   
    console.log(product);
    return (
        <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.stock}</p>
    
        <p>{product.thumbnail}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.price}</p>
        <img scr={product.thumbnail}></img>
    {/* {
        product.images.foreach(img=>
        {
            console.log(img);
        })

        product.images.map(url=>
        {
            return <img scr={url}></img>
        })
    } */}

        </div>
    )
}

export default Card