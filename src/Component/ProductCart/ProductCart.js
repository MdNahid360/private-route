import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';

const ProductCart = ({product}) => {
    const {addProduct, setAddProduct} = useContext(AuthContext);
    const {title, image, price} = product;
  
    const addProductHandler =(pData)=>{
       let n = [...addProduct, pData]
       setAddProduct(n)
    }
    return (
        <div className="bg-white p-2 rounded-lg relative">
            <span className="duration-300 hover:scale-105 w-full flex justify-center p-2">
                <img src={image} className="h-[200px]" alt="" />
            </span>
            <h2 className="font-bold text-orange-500 text-lg">${price}</h2>
            <h1 className='font-semibold text-lg'>{title}</h1><br /> <br />
            <button onClick={()=> addProductHandler(product)} className='bg-orange-600 absolute bottom-[7px] left-0 right-0  text-white w-[95%] mx-auto  rounded-lg py-2'>Order</button>
        </div>
    );
};

export default ProductCart;