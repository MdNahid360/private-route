import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            navigate(from, { replace: true });
        })
        .then(err =>{
            console.log(err.message);
        })
        

    }
    return (
        <div className=' h-screen flex pt-[5%] justify-center '>
             <form onSubmit={handleSignIn} align="center" className="w-[380px] bg-white h-[316px] rounded-lg px-4 py-3">
                <h1 className="font-bold text-3xl text-center mt-6">Login</h1>
                <span className="text-center" ><Link to="/signUp" className="text-blue-500 text-[16px] text-center">Create account</Link></span>
                 <div className="relative border-2 rounded-md border-red-300 mt-5">
                    <span className="bg-white absolute top-[-4px] left-[10px] w-[75px] h-[6px]"></span>
                    <label className="absolute top-[-10px] left-[7px] text-[14px] text-[#ff7373] px-2 " for="email">your email</label>
                    <input type="email" name='email' required className='h-[35px] w-full p-2 bg-white focus:bg-white hover:bg-white
                    active:bg-wh focus:outline-none rounded-md' />
                 </div>
                
                 <div className="relative border-2 rounded-md border-red-300 mt-6">
                    <span className="bg-white absolute top-[-4px] left-[10px] w-[100px] h-[6px]"></span>
                    <label className="absolute top-[-10px] left-[7px] text-[14px] text-[#ff7373] px-2 " for="email">your password</label>
                    <input type="password" name='password' required className='h-[35px] w-full p-2 bg-white focus:bg-white hover:bg-white
                    active:bg-wh focus:outline-none rounded-md' />
                 </div>
                 <Link className="float-right mt-2 text-red-500">Forget password</Link>

                 <input type="submit" className="bg-red-400 mt-3 w-full rounded-lg py-2 text-white shadow-md duration-200 hover:bg-red-500 cursor-pointer" />
             </form>
        </div>
    );
};

export default Login;