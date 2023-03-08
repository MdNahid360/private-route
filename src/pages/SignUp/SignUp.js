import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // create account
        createUser(email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset();
            navigate('/')
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
         });
       
          
    }
    return (
           <div className=' h-screen flex pt-[5%] justify-center '>
             <form onSubmit={handleSubmit} className="w-[380px] bg-white h-[396px] rounded-lg px-4 py-3" align="center">
                <h1 className="font-bold text-3xl text-center mt-6">Create Account</h1>
                 <span className="mt-3">You have create an account? <Link to="/login" className='text-blue-600 text-[16px]'>Login</Link></span>
                 <div className="relative border-2 rounded-md border-red-300 mt-8">
                    <span className="bg-white absolute top-[-4px] left-[10px] w-[75px] h-[6px]"></span>
                    <label className="absolute top-[-10px] left-[7px] text-[14px] text-[#ff7373] px-2 " htmlFor="name">your name</label>
                    <input type="name" name='name'  className='h-[35px] w-full p-2 bg-white focus:bg-white hover:bg-white
                    active:bg-wh focus:outline-none rounded-md' />
                 </div>
               
                 <div className="relative border-2 rounded-md border-red-300 mt-6">
                    <span className="bg-white absolute top-[-4px] left-[10px] w-[75px] h-[6px]"></span>
                    <label className="absolute top-[-10px] left-[7px] text-[14px] text-[#ff7373] px-2 " htmlFor="email">your email</label>
                    <input type="email" name='email'  className='h-[35px] w-full p-2 bg-white focus:bg-white hover:bg-white
                    active:bg-wh focus:outline-none rounded-md' />
                 </div>
                
                 <div className="relative border-2 rounded-md border-red-300 mt-6">
                    <span className="bg-white absolute top-[-4px] left-[10px] w-[100px] h-[6px]"></span>
                    <label className="absolute top-[-10px] left-[7px] text-[14px] text-[#ff7373] px-2 " htmlFor="email">your password</label>
                    <input type="password" name='password'  className='h-[35px] w-full p-2 bg-white focus:bg-white hover:bg-white
                    active:bg-wh focus:outline-none rounded-md' />
                 </div>
                 <input value="Sign UP" type="submit" className="bg-red-400 mt-4 w-full rounded-lg py-2 text-white shadow-md duration-200 cursor-pointer hover:bg-red-500" />
             </form>
        </div>
    );
};

export default SignUp;