import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function Card() {
    const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([])

    async function getProducts() {
        try {
            const response = await fetch(url)
            // console.log(data)
            const parsedData = await response.json()
            console.log(parsedData)
            setProducts(parsedData)
            console.log("Data is ")
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    },)
    return (
        <div>
            {
                products.map((product) => (
                    <div>
                        <div key={product.id}>
                            <div>
                                <p>{product.title}</p>
                            </div>
                            <div>
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <img src={product.image} />
                            </div>
                            <div>
                                <p>{product.price}</p>
                            </div>
                        </div>

                    </div>


                ))
            }

        </div>
    )
}

export default Card