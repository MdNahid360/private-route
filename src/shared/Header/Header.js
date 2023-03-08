import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
  
    const handleLogOut =()=>{
      logOut()
      .then(()=>{
        console.log('log out successfully !!!');
      })
      .catch((err)=>{
        console.log(err.message);
      })
  }
    return (
        <div className="bg-white h-[60px] flex justify-between items-center px-[7%]">
            <h1>Logo</h1>
            <ul className="flex items-center">
                <li className="px-3">
                    <Link className="text-black" to="/">Home</Link>
                </li>
                <li className="px-3">
                    <Link className="text-black" to="/orderReview">Order Review</Link>
                </li>
                <li className="px-3">
                    <Link className="text-black" to="/login">Login</Link>
                </li>
                <li className="px-3">
                    <Link className="text-black" to="/signUp">SignUp</Link>
                </li>
                <li className="px-3">
                   <button onClick={handleLogOut} className="bg-[#2f3c45] text-[13px] text-white px-5 py-[8px] rounded-md">Sign Out</button>
                </li>
                <li className="px-3">
                    <span>{user?.email}</span>
                </li>
            </ul>
        </div>
    );
};

export default Header;