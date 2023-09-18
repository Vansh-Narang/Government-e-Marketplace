import React, { useState } from 'react'
import Card from './card';
function Cards({products,filterdata}) {
    // console.log("products=>",products);
    //  const [title,settitle]=useState("Flipkart");
    return (
     <div>
       <div className=' flex  justify-around text-gray-800  mx-[14%] p-6 text-4xl'>
        <div className='  '>Flipkart</div>
        <div>Amazon</div>
     </div>
    
          <div className='grid  mx-[15%]'>
        {  
            products.map(product=>
            {
                return (
                    <div className='flex gap-[10%]'> <Card product={product} key={product.id} title={"Flipkart"}
                      ></Card>
                      <Card product={product} key={product.id} title={"Amazon"}  ></Card></div>
                   
                )
            })
        }

        </div>
     </div>
      
    )
}

export default Cards