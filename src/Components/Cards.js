import React from 'react'
import Card from './Card'
function Cards({products,filterdata}) {
    return (
        <div>
        {
            products.map(product=>
            {
                return (
                    <Card product={product} key={product.id}></Card>
                )
            })
        }

        </div>
    )
}

export default Cards