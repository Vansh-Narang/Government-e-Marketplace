import React, { useEffect, useState } from 'react'

import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { BsCurrencyRupee } from "react-icons/bs";

function Card({product,title}) {
    const navigate = useNavigate();
    console.log(product);
    return (
        <div className=' place relative bg-slate-700 text-white '>
        <img src={product.thumbnail} className=" w-[360px] aspect-[1/1]  object-cover  "></img>
         <h1 className="  text-4xl mt-4  flex items-center justify-center gap-2  text-green-400 tracking-widest">{product.price} <spam className="mt-2" ><BsCurrencyRupee/> </spam></h1>
          <h4 className="text-gray-300">{product.category}</h4>
        <h2 className=' text-gray-100 font-semibold  text-lg mt-5 leading-7' >
        <span className=' text-white font-bold'>Title:</span> {product.title}</h2>
        <p className=' text-gray-300'><span className=' font-bold text-white'>description: </span>{product.description}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.stock}</p>
        {/* <p>{product.thumbnail}</p> */}
    
        {/* <img scr={product.thumbnail}></img> */}
        <div className=' flex items-end' onClick={()=>
        {
            window.location.href= title==="Amazon"?(product.url_amazon):(product.url_flipkart);
        }}> 
        <button className=" px-7 mb-4 mt-7  bg-slate-800   transition-all 
         duration-200 py-3   hover:bg-slate-900 text-white  hover:border rounded-3xl border-white">View on {title}</button></div>
       
        </div>
    )
}

export default Card