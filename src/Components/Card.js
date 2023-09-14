import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Data from "../Dummy.json";
import { Link } from "react-router-dom"

function Card() {
   
    return (
        <div>
            {
                Data.products.map((product, i) => (
                    <div>
                        <div key={i}>
                            <div>
                                <p>{product.title}</p>
                            </div>
                            <div>
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <img src={product.thumbnail} />
                            </div>
                            <div>
                                <p>{product.price}</p>
                            </div>
                            <div>
                                {/* <button>Buy at Amazon</button>
                                <p>{product.url_amazon}</p> */}
                                {
                                    <Link to={product.url_amazon} target='_blank'>Buy at Amazon</Link>
                                }

                            </div>
                        </div>

                    </div>


                ))
            }

        </div>
    )
}

export default Card