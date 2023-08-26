import React, { useState, useEffect } from 'react';

// eslint-disable react-hooks/exhaustive-deps

import { getProducts } from './helper/coreApiCalls';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
        .then(data => {
            if (data.error) {
                setError(data.error);
                console.log(error);
            } else {
                setProducts(data);
            }
        })
        .catch(error => console.log(error))    
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {loadAllProducts()}, []);

    
    
    return (
        <div>
            <h1>Home components</h1>
            <div className='row'>
                {products.map((product, index) => {
                    return (
                        <div key={index}>
                            <h1>{product.name}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}