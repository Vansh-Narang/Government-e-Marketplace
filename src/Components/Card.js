import React, { useEffect, useState } from 'react'

import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { BsCurrencyDollar } from "react-icons/bs";

function Card({product,title}) {

    const navigate = useNavigate();
    console.log("product=>",product);
        console.log(product.thumbnail);
    return (
        <div className=' place relative bg-[#FFF]  opacity-80 text-black '>
        <img src={title==="Amazon"?(product.thumbnail_amazon):(title==="Flipkart"?(product.thumbnail_flipkart):(title==="Gem"?(product.thumbnail_gem):(!title==="India_Mart"?(product.thumbnail):(product.thumbnail_indiamart))))}
        
         className=" w-[360px] aspect-[1/1]  object-cover  "></img>
         <h1 className="text-4xl mt-2 flex text-black ">
         {title==="Amazon"?(product.price_amazon):(title==="Flipkart"?(product.price_flipkart):(title==="Gem"?(product.price_gem):(title==="India_Mart"?(product.price_indiamart):(product.price))))}
          <span className="mt-1" ><BsCurrencyDollar/> </span></h1>
         
        <h2 className=' text-black text-lg mt-2 leading-7 mr-24' >
        <span className=' text-black font-bold'>Title:</span> 
        <br/>
        {product.title}
        </h2>
        {/* <p className=' text-gray-300'><span className=' font-bold text-white flex'>Title :</span>{product.title }</p> */}
        <p className=' text-black'><span className=' font-bold text-black flex'>Description :</span>{product.description}</p>
        {/* <p><span className=' text-white font-bold'>Discount :</span> {product.discountPercentage}</p>
          <p><span className=' text-white font-bold'>Stock : </span>{product.stock}</p> */}
        {/* <p>{product.thumbnail}</p> */}
    
        {/* <img scr={product.thumbnail}></img> */}
        <div className=' flex items-end' onClick={()=>
        {
            window.location.href= title==="Amazon"?(product.url_amazon):(product.url_flipkart);
        }}> 
        <button className=" px-7 mb-4 mt-7  bg-black  z-10  transition-all 
         duration-200 py-3 hover:bg-black text-white  hover:border rounded-3xl opacity-100 border-black">View on {title}</button></div>
       
        </div>
    )
}

export default Card