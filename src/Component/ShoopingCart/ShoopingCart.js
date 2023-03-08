import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const ShoopingCart = () => {
    const {addProduct, setAddProduct} = useContext(AuthContext);
    const deleteHandler=(data)=>{
        let itm = addProduct.filter(itm => itm.id !== data.id)
        setAddProduct(itm);
    }
    return (
        <div>
            {
                addProduct.length===0? <div className="font-semibold text-center py-3  w-full text-[#a09999] text-lg">Can't added product</div> : <div>
                          {
                addProduct.map(prd => <ul key={prd.id}>
                    
                    <li className='bg-[#feecec] grid grid-cols-4 items-start overflow-hidden p-2 gap-2 m-2 rounded'>
                        <span className="bg-white w-[60px] h-[60px] flex items-center justify-center rounded-lg overflow-hidden p-2">
                            <img src={prd.image} alt="" className="w-[90%]"/>
                        </span>
                        <div className="col-span-3 flex justify-between">
                             <div>
                                <h4>{prd.title}</h4>
                                <span className="font-bold text-orange-500">${prd.price}</span>
                             </div>

                             <button onClick={()=> deleteHandler(prd)} className='w-[40px] h-[40px] flex items-center justify-center text-center rounded-full text-[#db054c] text-xl'><span>X</span></button>
                        </div>
                    </li>
                </ul>)
            }
                </div>
                    }
          
            <button className='bg-orange-400 w-full py-2 text-white rounded cursor-pointer duration-200 hover:bg-orange-500 relative h-[45px]'>
                <Link className=" absolute my-auto left-0 right-0 top-[8px] bottom-0" to="orderReview">Order Now</Link>
        </button>
        </div>
    );
};

export default ShoopingCart;