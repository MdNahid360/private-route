import React, { useContext, useEffect, useState } from 'react';
import ProductCart from '../../Component/ProductCart/ProductCart';
import ShoopingCart from '../../Component/ShoopingCart/ShoopingCart';

const Home = () => {
    const [product, setProduct] =  useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[])

    return (
        <div>
            <div className="grid grid-cols-4">
                <div className=" col-span-3 p-3 h-screen overflow-y-scroll">
                    <header className="h-[350px] rounded-xl bg-[#ffc7d3] flex items-center justify-center">
                    <h1 className="font-bold text-6xl">Welcome</h1>
                   </header>
                   <h1 className="text-2xl font-bold mt-3 pb-2 border-b border-gray-700">Products</h1>

                   <div className="grid grid-cols-4 gap-2 mt-5">
                       {
                        product.map(product => <ProductCart key={product.id} product={product}></ProductCart>)
                       }
                   </div>
                </div>


                <div className="bg-white mt-3 h-screen px-2 pt-1">
                    <h1 className="font-semibold mt-3 pb-2 border-b border-gray-700">Shopping cart</h1>
                    <ShoopingCart></ShoopingCart>
                </div>
            </div>
        </div>
    );
};

export default Home;